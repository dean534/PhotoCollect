const api = {};

api.Pixabay = {
  name: "Pixabay",
  url: "https://pixabay.com/api/",
  params: (query, per_page = 50, page = 1) => ({
    key: "10606507-08decefeedcf01b749be23188",
    q: query,
    per_page,
    page
  })
};

api.Pexels = {
  name: "Pexels",
  url: "https://api.pexels.com/v1/search",
  headers:{
    Authorization: "563492ad6f917000010000017cec4fe816ff4224bdb3f5719725a51b"
  },
  params: (query, per_page = 50, page = 1) => ({
    query,
    per_page,
    page
  })
};

export default api;
