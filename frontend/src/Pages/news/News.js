import React from 'react';
// import {NewsContextProvider} from '../../Components/fetchNews/fetchNews'
// import NewsMap from '../../Components/news/newsMap'
import FetchNews from '../../Components/fetchNews/fetchNews'
// import FetchTweets from '../../Components/fetchTweets/fetchTweets'
import "./News.css"
import Map2 from '../../Components/maps/map2'
export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="news">
                {/* <FetchTweets/> */}
                <div>
                    <div className='map2Title'>Number of Discrimination Against Asians</div>
                    <Map2 />
                </div>
                <FetchNews />
            </div>
        )
    }
}