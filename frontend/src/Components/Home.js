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
                        <p>There have always been biases against Asians in the United States. Such biases have intensified since the outbreak of COVID-19 in the United States. The recent surge of hate crimes targeting Asians brings more awareness to the serious issue of racial discrimination. </p>
                        <p>According to CNN, from then through the end of 2020, Stop AAPI Hate received a total of 3,292 complaints from all 50 states and Washington, DC. Asian are facing catastrophic situations currently. Former United States President Donald Trump referring to COVID-19 as the “Chinese Virus” to intensify the long-standing anti-Asian sentiments. It is revealed in the recent news: six Asian women in Atlanta were killed by a gunman on March 16; a 75-year-old Asian American woman was attacked from behind in San Francisco, and the list goes on and one. According to Stop AAPI Hate, 3800 cases of Asian hate crimes were reported in the past year. </p>
                        <p>Recently, protests against Asian American hate are happening across the US. Hundreds of people gathered in Georgia, Los Angeles, San Francisco, Atlanta, and many other cities, with some demonstrators carrying signs declaring “Stop Asian Hate.” Asians are taking action to stop the violence against themselves.</p>
                        <p>We are a group of students from JHU and UCLA, and we are aiming to build a community that fosters care and understanding. We are calling for everyone to stand with our Asian community. Asians should not be subject to stereotypes or discrimination, live safely and equally. Asian culture and history should be understood and embraced in American society. The stories of Asian individuals are supposed to be heard and celebrated. Those are the things that we aim to achieve and publicize through this site, STAND WITH ASIANS, to make this world a better place.</p>
                    </div>

                </div>
                <NewsLetter />
            </div >

        )
    }
}