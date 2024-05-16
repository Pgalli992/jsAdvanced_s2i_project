import * as modal from "./modal.js";

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
const getNewsInfo = async function () {
  try {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/item/40352258.json"
    );
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

getNews();
getNewsInfo();

const loadNews = async function () {};
