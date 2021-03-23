import React from "react";
import TweetsCard from "./tweetsCard";


function TweetsMap({ data }) {



  return (
    <div>
      <h1 className="head__text">News </h1>
      <div className="all__news">
        {data
          ? data.map((data) => (
            <TweetsCard data={data} key={data.url} />
          ))
          : 'Loading'}
      </div>
    </div>
  );
}

export default TweetsMap;