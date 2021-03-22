import React, { useContext } from "react";
import { NewsContext } from "../fetchNews/fetchNews";
import NewsCard from "./newsCard";
import './newsMap.css'
function NewsMap({data}) {
   
  

  return (
    <div>
      
      <div>
                    <h1 className="head__text">News </h1>
                    
                    <div className="all__news">
                    {data
                    ?data.map((data) => (
                        <NewsCard data={data} key={data.url} />
                    ))
                    :'Loading'}
                       
                    </div>
                </div>
    </div>
  );
}

export default NewsMap;