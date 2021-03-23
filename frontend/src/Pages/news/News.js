import React from 'react';
// import {NewsContextProvider} from '../../Components/fetchNews/fetchNews'
// import NewsMap from '../../Components/news/newsMap'
import FetchNews from '../../Components/fetchNews/fetchNews'
// import FetchTweets from '../../Components/fetchTweets/fetchTweets'
import "./News.css"

export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="news">
                {/* <FetchTweets/> */}
                <FetchNews />
            </div>
        )
    }
}