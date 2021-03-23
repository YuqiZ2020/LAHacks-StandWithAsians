import React, { Component } from 'react'
import NewsCard from '../news/newsCard'
import NewsMap from '../news/newsMap'
export default class fetchNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
        };        
        const url = 'https://newsapi.org/v2/everything?' +
        'q=StopAsianHate&' +
        'from=2021-03-01&' +
        // 'language=en$' + 
        'sortBy=publishedAt&' +
        'pageSize=11&' +
        // 'country=us&' +
        // 'domains=techcrunch.com&' +
        'apiKey=63c9f3adbfde498d9d75b0f0e05c0654';
        this.req = new Request(url);        
    }

    componentDidMount() {
        fetch(this.req)
        .then(response => response.json())
        .then(res => {
            const articles = res.articles;
            // Set state with result
            // console.log(articles);
            this.setState({ data: articles });
        })
    }
    
    render() {
        let newsData = this.state.data; 
        return (
            <div>
                <NewsMap data={newsData}/>
            </div>
        )
    }
}
