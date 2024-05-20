const resultSection = document.querySelector(".result__section");

export const state = {
  info: {},
  page: 1,
  results: [],
  resultsPerPage: 10, // RES_PER_PAGE
};

// Converting time info (in MS) to a date and time string
const timeConverter = function (timeInMS) {
  let dateTime = new Date(timeInMS * 1000);
  let date = dateTime.toLocaleDateString("it-IT");
  let time = dateTime.toLocaleTimeString("it-IT").slice(0, -3);
  return `[${date} - ${time}]`;
};

// Creatingg new objecy to store result information
export const createObj = function (data) {
  const info = data;
  return {
    author: info.by,
    id: info.id,
    time: timeConverter(info.time),
    title: info.title,
    url: info.url,
  };
};

// Creating markup to render results
export const createNewsMarkup = function (data) {
  const markup = `<div
  class="flex flex-col items-center relative bg-gray-900 text-slate-50 py-4"
>
  <h1 class="text-xl font-bold">
    ${data.title}
  </h1>
  <span class="my-2">${data.author}</span>
  <span class="text-blue-400">${data.time}</span>
  <button
    class="w-max absolute text-gray-900 font-bold bg-slate-50 rounded-xl
    shadow-[0_25px_50px_-12px_rgba(255,255,255,.4)] py-2 px-4 justify-self-center
    duration-150 right-3 top-1/2 -translate-y-1/2 hover:-translate-y-6 hover:bg-blue-400 active:-translate-y-1/2"
  >
  ${!data.url ? `<a>No Link<a/>` : `<a href="${data.url}" target="_blank">Open</a>`}
    
  </button>
</div>`;
  resultSection.insertAdjacentHTML("beforeend", markup);
};
