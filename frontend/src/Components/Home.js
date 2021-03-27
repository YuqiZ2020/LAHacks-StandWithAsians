import React from 'react';
import "./Home.css";
import NewsLetter from "../Components/newsLetter/newsLetter"
import sample1 from "../Image/sample1.png";
import sample2 from "../Image/sample2.png";
import sample3 from "../Image/sample3.png";
import sample4 from "../Image/sample4.png";
import sample5 from "../Image/sample5.png";
import test1 from '../Image/test1.png';
import test2 from '../Image/test2.png';
import test3 from '../Image/test3.png';
import test4 from '../Image/test4.png';
import test5 from '../Image/test5.png';
export default class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="display-window" />

                <div className="image-list">
                    <img src={test1} alt="test1"></img>
                    <img src={test2} alt="test2"></img>
                    <img src={test3} alt="test3"></img>
                    <img src={test4} alt="test4"></img>
                    <img src={test5} alt="test5"></img>
                </div>
                <div className='about-wrap'>

                    <div className="about">
                        <h1>STAND WITH ASIANS</h1>
                        <p>This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. </p>

                    </div>

                </div>
                <NewsLetter />
            </div >

        )
    }
}