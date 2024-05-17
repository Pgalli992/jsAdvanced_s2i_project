export const createNewsObj = function (data) {
  const newsObj = {
    author: data.by,
    id: data.id,
    time: data.time,
    title: data.title,
    url: data.url,
  };
  console.log(newsObj);
};
