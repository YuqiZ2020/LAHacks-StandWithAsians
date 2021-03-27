import React from 'react';
import "./Home.css";
import NewsLetter from "../Components/newsLetter/newsLetter"
import sample1 from "../Image/sample1.png";
import sample2 from "../Image/sample2.png";
import sample3 from "../Image/sample3.png";
import sample4 from "../Image/sample4.png";
import sample5 from "../Image/sample5.png";
import Test1 from '../Image/test1.png'
export default class Home extends React.Component {
    render() {
        return (
            <div>



                <div className='test-image>'>
                    <img src={Test1}/>
                </div>
                <div className="display-window">

                    <div className="image-list">
                        <img src={sample1} alt="sample1"></img>
                        <img src={sample2} alt="sample2"></img>
                        <img src={sample3} alt="sample3"></img>
                        <img src={sample4} alt="sample4"></img>
                        <img src={sample5} alt="sample5"></img>
                    </div>

                </div>
                <div className='about-wrap'>

                    <div className="about">
                        <h1>Stop Asian Hate</h1>
                        <p>This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph. </p>

                    </div>

                </div>
                <NewsLetter />
            </div >
            
        )
    }
}