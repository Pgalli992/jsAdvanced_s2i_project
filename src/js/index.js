import { state, createObj, createNewsMarkup } from "./model.js";

// Getting new sroties ID
const getNews = async function () {
  try {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    const data = await res.json();

    chooseNews(data);
    chooseNews(data);
    chooseNews(data);
    chooseNews(data);
    chooseNews(data);
    renderNews(state.results);
  } catch (err) {
    console.error(err);
  }
};

const chooseNews = function (data) {
  const start = state.results.length;
  console.log(start);
  const end = start + 10;

  state.results.push(...data.slice(start, end));
  console.log(state.results);
};

const renderNews = function (array) {
  array.map(async (id) => {
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
