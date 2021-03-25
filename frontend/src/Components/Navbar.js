import "./Navbar.css"
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from "./About";
import Forum from "../Pages/forum/Forum";
import ForumDiscussion from "../Pages/forum/ForumDiscussion"
import Gallery from "./Gallery";
import Home from "./Home";
import News from "../Pages/news/News";
import Resources from "../Pages/resources/Resources";
import Review from "./Review";

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <nav className="link-container">
                        <Link to="/" className="link">Home</Link>
                        <Link to="/about" className="link">About</Link>


                        <div className='link'>
                        <div className='dd'>
                            <Link to="/news" className="link">News</Link>
                            <div class="dropdown-content">
                                <a href="#news-news">News</a>
                                <a href="#news-tweets">Tweets</a>
                                <a href="#news-petitions">Petitions</a>
                                <a href="#news-data">Data</a>
                                
                            </div>
                        </div>
                        </div>
                        <Link to="/forum" className="link">Forum</Link>
                        <Link to="/gallery" className="link">Gallery</Link>
                        <Link to="/resources" className="link">Resources</Link>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/news" component={News} />
                        <Route exact path="/forum" component={Forum}/>
                        <Route exact path="/forum/:postId" component={ForumDiscussion}/>
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/resources" component={Resources} />
                        <Route path="/review" component={Review} />
                    </Switch>
                </div>
            </Router>
        )
    }
}