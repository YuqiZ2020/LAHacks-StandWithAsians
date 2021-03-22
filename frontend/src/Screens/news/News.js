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
<<<<<<< HEAD
            <div>            
                <FetchNews/>
                
=======
            <div className="news">
                <FetchNews />
>>>>>>> 07128b031216b948c472572df92ab63ed529d04c
            </div>
        )
    }
}