import { state, createObj, createNewsMarkup } from "./model.js";

// Getting new sroties ID
const getNews = async function () {
  try {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    const data = await res.json();

    chooseNews(data);
    renderNews(state.results);
    chooseNews(data);
    renderNews(state.results);
    chooseNews(data);
    renderNews(state.results);
    chooseNews(data);
    renderNews(state.results);
  } catch (err) {
    console.error(err);
  }
};

const chooseNews = function (data) {
  const start = state.results.length;
  const end = start + 10;

  state.results.push(...data.slice(start, end));
};

const renderNews = function (array) {
  array.slice(-10).map(async (id) => {
    console.log("call");
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

const loadNews = function () {};
