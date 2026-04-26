mport axios from "axios";

export const fetchTopHeadlines = async (
  category = "general",
  page = 1,
  query = ""
) => {
  try {
    const res = await axios.get("/.netlify/functions/news", {
      params: { category, page, query },
    });

    return {
      articles: res.data.articles || [],
      totalResults: res.data.totalArticles || 0,
    };
  } catch (err) {
    console.error("API ERROR:", err);
    return { articles: [], totalResults: 0 };
  }
};
