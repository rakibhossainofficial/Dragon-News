import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../NewsCard/NewsCard";

const CategorieNews = () => {
  const [categorieNews, setCategoriesNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoriesNews(data);
      return;
    } else if (id == "1") {
      const singleNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoriesNews(singleNews);
    } else {
      const singleNews = data.filter((news) => news.category_id == id);
      setCategoriesNews(singleNews);
    }
  }, [id, data]);

  return (
    <div>
      {categorieNews.map((news) => (
        <NewsCard news={news}></NewsCard>
      ))}
    </div>
  );
};

export default CategorieNews;
