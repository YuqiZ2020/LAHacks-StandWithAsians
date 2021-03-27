import React, {useState, useEffect} from 'react';
import TweetCard from './TweetCard'

const FetchTweets = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/').then(function(response){
      return response.json(); //parsed to json
    }).then(function(parsedResponse){
      //use parsedResponse
      setStatuses(parsedResponse.statuses);
    });
  }, []);

  return (
    <div>
        {/* use && to ensure there is data for statuses when render */}
        {statuses && statuses.map(status => (
          <TweetCard data={status} key={status.id}/>
           
        ))}
    </div>
  );

}

export default FetchTweets;


