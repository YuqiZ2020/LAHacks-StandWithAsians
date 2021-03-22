import React, { Component } from 'react'
import NewsCard from '../news/newsCard'

export default class fetchNews extends Component {
    constructor(props){
        super(props);

        this.state = {
            data:[],
        };
        
        const url = 'https://newsapi.org/v2/everything?' +
        'q=StopAsianHate&' +
        'from=2021-03-01&' +
        'sortBy=popularity&' +
        // 'country=us&' +
        'apiKey=63c9f3adbfde498d9d75b0f0e05c0654';

        this.req = new Request(url);

        
    }

    componentDidMount() {
        fetch(this.req)
        .then(response => response.json())
        .then(res => {
            const articles = res.articles;
            // Set state with result
            console.log(articles);
            this.setState({ data: articles });
          })

    }

    
    render() {
        let newsData = this.state.data;
       
 
        return (
            <div>
           

                    <div>
                    <h1 className="head__text">News </h1>
                    <div className="all__news">
                    {this.state.data.map((data) => (
                        <NewsCard data={data} key={data.url} />
                    ))}
                       
                    </div>
                </div>
          </div>
        )
    }
}
