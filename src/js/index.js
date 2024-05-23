import * as model from "./model.js";

// Getting new sroties ID
const getNews = async function () {
  try {
    model.renderSpinner();
    const data = await model.newStories();
    model.renderSpinner();
    model.chooseNews(data);
    model.renderNews(model.state.results);
    model.loadedNews.textContent = `${model.state.results.length}`;
  } catch (err) {
    console.error(err);
  }
};

model.btnLoadMore.addEventListener("click", function (e) {
  e.preventDefault();
  if (model.state.results.length < 500) {
    getNews();
    // Page scroll to last news.
    const id = `n${model.state.results.at(-1)}`;
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  return;
});

getNews();
