import _ from "lodash";

const loadContainer = document.querySelector(".load__container");
const spinnerContainer = document.querySelector(".spinner__container");

export const resultSection = document.querySelector(".result__section");

export const btnLoadMore = document.querySelector(".btn__load_more");
export const loadedNews = document.querySelector(".loaded__news");

export const state = {
  info: {},
  page: 1,
  results: [],
  resultsPerPage: process.env.RES_PER_PAGE, // RES_PER_PAGE
};

// Converting time info (in MS) to a date and time string
const timeConverter = function (timeInMS) {
  let dateTime = new Date(timeInMS * 1000);
  let date = dateTime.toLocaleDateString("it-IT");
  let time = dateTime.toLocaleTimeString("it-IT").slice(0, -3);
  return `[${date} - ${time}]`;
};

// Creating new objecy to store result information
const createObj = (data) => ({
  author: data.by,
  id: data.id,
  time: timeConverter(data.time),
  title: data.title,
  url: data.url,
});

// Loading spinner
export const renderSpinner = function () {
  loadContainer.classList.toggle("hidden");
  spinnerContainer.classList.toggle("hidden");
};

// Timeout to race witch get callexport
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// Create markup to render results
export const createNewsMarkup = function (data) {
  const markup = `<div id="n${data.id}"
  class="flex flex-col items-center relative bg-gray-900 text-slate-50 py-4"
>
  <h1 class="text-xl font-bold">
    ${data.title}
  </h1>
  <span class="my-2">${data.author}</span>
  <span class="text-blue-400">${data.time}</span>
  ${
    !data.url
      ? ``
      : ` <button
  class="w-max absolute text-gray-900 font-bold bg-slate-50 rounded-xl
  shadow-[0_25px_50px_-12px_rgba(255,255,255,.4)] py-2 px-4 justify-self-center
  duration-150 right-3 top-1/2 -translate-y-1/2 hover:-translate-y-6 hover:bg-blue-400 active:-translate-y-1/2">
  <a href="${data.url}" target="_blank">Open</a>
  </button>`
  }
    
  
</div>`;
  resultSection.insertAdjacentHTML("beforeend", markup);
};

// Ask for 500 top new stories
export const newStories = async function () {
  try {
    const res = await axios.get(`${process.env.API_URL}newstories.json`);
    const data = res.data;
    return data;
  } catch (err) {
    throw err;
  }
};

// Choose the news to render
export const chooseNews = function (data) {
  const start = state.results.length;
  const end = start + 10;

  state.results.push(..._.slice(data, start, end));
  return state;
};

// Render news
export const renderNews = function (array) {
  // Check if the user is trying to load more than 500 news
  if (state.results.length < 500) {
    // Mapping only the last 10 ids to reduce the numbers of calls.
    _.map(_.slice(array, -10), async function (id) {
      try {
        // Setting timeout for request
        const res = await Promise.race([
          axios.get(`${process.env.API_URL}item/${id}.json`),
          timeout(process.env.TIMER_SEC),
        ]);
        const data = res.data;
        // Filling state object with data
        state.info = createObj(data);
        // Creating a markup to render the news
        createNewsMarkup(state.info);
      } catch (err) {
        throw err;
      }
    });
  } else {
    btnLoadMore.innerHTML = `
        <div class="flex flex-col justify-end">
          <span class="text-xl text-gray-900 font-bold">
            No more news
          </span>
          <span class="text-xs"
            >Loaded News:
            <span class="loaded__news font-bold">500</span>
          </span>
        </div>
      `;
    btnLoadMore.classList.remove("active:scale-95", "active:shadow-2xl");
    btnLoadMore.style.backgroundColor = "red";
  }
};
