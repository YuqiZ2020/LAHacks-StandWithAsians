import React from 'react';
// import {NewsContextProvider} from '../../Components/fetchNews/fetchNews'
// import NewsMap from '../../Components/news/newsMap'
import FetchNews from '../../Components/fetchNews/fetchNews'
import "./News.css"



export default class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div>            
                <FetchNews/>
                
            </div>


        )
    }
}