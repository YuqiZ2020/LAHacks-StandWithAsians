import React from "react";
import PetitionCard from './PetitionCard'


function PetitionMap({data}) {

  return (
    <div>
      <div className="all_petitions">
      {data
          ? data.map((data) => (
            <PetitionCard data={data} key={data.id} />
          ))
          : 'Loading'}
      </div>
    </div>
  );
}

export default PetitionMap;