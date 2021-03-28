import React from 'react';
// import {NewsContextProvider} from '../../Components/fetchNews/fetchNews'
// import NewsMap from '../../Components/news/newsMap'
import FetchNews from '../../Components/fetchNews/fetchNews'
import FetchTweets from '../../Components/fetchTweets/fetchTweets'
import "./News.css"
import Map2 from '../../Components/maps/map2'
import Map3 from '../../Components/maps/map3'
import Map4 from '../../Components/maps/map4'
import PetitionMap from '../../Components/petitions/PetitionMap'
import PetitionData from "../../Components/fetchPetitions/petitions";

export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="news">



                {/* news */}
                <div className='forumT' id='news-news'>News</div>
                <FetchNews />

                {/* tweets */}
                <div className='forumT' id='news-tweets'>Tweets</div>
                <FetchTweets />

                {/* change org*/}
                <div className='forumT' id='news-petitions'>Petitions</div>
                <PetitionMap data = {PetitionData} />



                <div className='forumT' id='news-data'>Data</div>
                <div className='map-bottom'>
                    <div>
                        <div className='map2Title'>Number of Discrimination against Asians (Mar 19, 2020 to Feb 28, 2021)</div>
                        <Map2 />
                    </div>
                    <div className='mapTitle'>
                        Ethnicity of Respondants (N = 3,795) of Discriminations against Asians (Mar 19, 2020 to Feb 28, 2021)
                    </div>

                    <Map3 />
                    <div className='map4'>
                        <div className='mapTitle'>
                            Anti-Asian Hate Crime Incidents FBI Data (1996-2019)
                    </div>
                        <Map4 />
                    </div>
                </div>
                <div className='source'>
                    Source: 210312-Stop-AAPI-Hate-National-Report-.pdf FACT SHEET- Anti-Asian Hate 2020 rev 3.21.21.pdf
      </div>
            </div>
        )
    }
}