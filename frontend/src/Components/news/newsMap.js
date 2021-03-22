import React, { useContext } from "react";
import { NewsContext } from "../fetchNews/fetchNews";
import NewsCard from "./newsCard";

function NewsMap(props) {
   const { data } = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsCard data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
    </div>
  );
}

export default NewsMap;