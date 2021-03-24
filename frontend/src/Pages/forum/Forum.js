import React, { useEffect, useState } from 'react';
import "./Forum.css"
import ForumMap from '../../Components/forum/forumMap'


import { db } from "../../firebase"


import SubmitButton from '../../Components/submitForumStory/submitButton'

export default function Forum() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        // const forumRef = db.collection("forum");
        // const forum = await forumRef.get()
        // forum.docs.forEach(item=>{
        //     setData([...data, item.data()])
        // })
        db.collection("forum")
            .get()
            .then(querySnapshot => {
                const items = querySnapshot.docs.map(doc => doc.data());
                // console.log(item)
                setData(items)
            })
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="forum">

            {/*Title and Button  */}
            <div className='fixedSubmit'>
                <div className='submit'>
                    <SubmitButton />
                </div>

                <div className="stats">
                    <p>XXX people have shared their stories</p>
                </div>

            </div>



            <div className='stories-container'>
                {console.log(data)}


                <div className='stories1'>

                    <ForumMap data={data} />

                </div>
            </div>

        </div >



    )
}
