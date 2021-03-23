import React from 'react';
import "./Forum.css"
import ForumMap from '../../Components/forum/forumMap'
import data1 from '../../Components/forum/forumDummy1.js'
import data2 from '../../Components/forum/forumDummy2.js'

import SubmitButton from '../../Components/submitForumStory/submitButton'

export default function Forum() {

    return (
        <div className="forum">
            <div className='stories-container'>


                {/* {data.map(d => d % 2 ==0 ?  
            <div className="stories1"> <ForumMap data={d} /></div> : 
            <div className="stories2"> <ForumMap data={d} /> </div>
      
            )} */}


                <div className='stories1'>

                    <ForumMap data={data1} />

                </div>


                <div className='stories2'>
                    <ForumMap data={data2} />
                </div>



                <div className="submitButton">
                    <div className='submit'>
                        <SubmitButton />
                    </div>
                    <div className="stats">
                        <b>XXX people from XXX cities have shared their stories</b>
                    </div>
                </div>
            </div>


        </div>

    )
}