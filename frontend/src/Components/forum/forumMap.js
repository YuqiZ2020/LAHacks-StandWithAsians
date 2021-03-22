import React, { useContext } from "react";
import ForumCard from "./forumCard";



function forumMap({ data }) {

  return (
    <div>
      <h1 className="head__text">Forum </h1>
      <div className="all__news">
        {data
          ? data.map((data) => (
            <ForumCard data={data} key={data.id} />
          ))
          : 'Loading'}
      </div>
  </div>
  );
}

export default forumMap;