import React from "react";
import PetitionData from "../fetchPetitions/all_petitions.json";
import PetitionCard from './PetitionCard'


function PetitionMap() {

    const dataSource = PetitionData.data;

    console.log('enter petition map')


  return (
    <div>
      <div className="all_petitions">
        {dataSource && dataSource.map(item => (
          <PetitionCard data={item} key={item.url} />
           
        ))}
      </div>
    </div>
  );
}

export default PetitionMap;