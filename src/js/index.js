import { createNewsObj } from "./modal.js";

const getNews = async function () {
  try {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );
    const data = await res.json();
    console.log(res, data);
  } catch (err) {
    console.error(err);
  }
};
const getNewsInfo = async function (id) {
  try {
    const res = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json`
    );
    const data = await res.json();
    createNewsObj(data);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

const renderNews = function (obj) {};

getNews();
getNewsInfo(40387195);

const loadNews = function () {};
