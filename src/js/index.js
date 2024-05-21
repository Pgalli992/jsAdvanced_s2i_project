import { state, createObj, createNewsMarkup } from "./model.js";

const btnLoadMore = document.querySelector(".btn__load_more");
const loadedNews = document.querySelector(".loaded__news");
const loadContainer = document.querySelector(".load__container");
const spinnerContainer = document.querySelector(".spinner__container");

// Getting new sroties ID
const getNews = async function () {
  try {
    renderSpinner();
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    if (!res.ok) throw new Error("Failed to fetch news stories");
    const data = await res.json();
    renderSpinner();
    chooseNews(data);
    renderNews(state.results);
    loadedNews.textContent = `${state.results.length}`;
  } catch (err) {
    console.error(err);
  }
};

const renderSpinner = function () {
  loadContainer.classList.toggle("hidden");
  spinnerContainer.classList.toggle("hidden");
};

const chooseNews = function (data) {
  const start = state.results.length;
  const end = start + 10;

  state.results.push(...data.slice(start, end));
};

const renderNews = function (array) {
  // mapping only the last 10 ids to reduce the numbers of calls.
  array.slice(-10).map(async (id) => {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await res.json();
    // Filling state object with data
    state.info = createObj(data);
    // Creating a markup to render the news
    createNewsMarkup(state.info);
  });
};

// Getting all information about news
const getNewsInfo = async function (id) {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await res.json();
    // Filling state object with data
    state.info = createObj(data);
    // Creating a markup to render the news
    createNewsMarkup(state.info);
  } catch (err) {
    console.error(err);
  }
};

getNews();

btnLoadMore.addEventListener("click", function (e) {
  e.preventDefault();
  getNews();
  // Page scroll to last news.
  const id = `n${state.results.at(-1)}`;
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
});
