import "./Navbar.css"
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Forum from "./Forum";
import Gallery from "./Gallery";
import Home from "./Home";
import News from "./News";
import Resources from "./Resources";

export default class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <nav className="link-container">
                        <Link to="/home" className="link">Home</Link>
                        <Link to="/news" className="link">News</Link>
                        <Link to="/forum" className="link">Forum</Link>
                        <Link to="/gallery" className="link">Gallery</Link>
                        <Link to="/resources" className="link">Resources</Link>
                    </nav>
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/news" component={News} />
                        <Route path="/forum" component={Forum} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/resources" component={Resources} />
                    </Switch>
                </div>
            </Router>
        )
    }
}