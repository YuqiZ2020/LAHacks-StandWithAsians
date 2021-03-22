import React, { useContext } from "react";
import NewsCard from "./newsCard";
import './newsMap.css'


function NewsMap({ data }) {



  return (
    <div>
      <h1 className="head__text">News </h1>
      <div className="all__news">
        {data
          ? data.map((data) => (
            <NewsCard data={data} key={data.url} />
          ))
          : 'Loading'}
      </div>
    </div>
  );
}

export default NewsMap;