import React from "react";
import ForumCard from "./forumCard";
import "./forumMap.css"



function forumMap({ data }) {

  return (
    <div>
      {/* <h1 className="head__text">Forum </h1> */}
      <div className="forum-map">
        {data
          ? data.map((data) => (
            <ForumCard data={data} key={data.realId} />
          ))
          : 'Loading'}
          
      </div>
    </div>
  );
}

export default forumMap;