import React, { useEffect, useState } from 'react';
import "./Forum.css"
import ForumMap from '../../Components/forum/forumMap'
import PlaceHolder from '../../Components/skeleton/Skeleton'
import { db } from "../../firebase"
import SubmitButton from '../../Components/submitForumStory/submitButton'

export default function Forum() {
    const [data, setData] = useState([]);
    const [Loaded, setLoaded] = useState(false);

    // const fetchData = async () => {
    //     db.collection("forum")
    //         .get()
    //         .then(querySnapshot => {
    //             const items = querySnapshot.docs.map(doc => {
    //                 return { ...doc.data(), realId: doc.id }
    //             }
    //             );
    //             console.log(items)
    //             setData(items)
    //         })
    // }
    // useEffect(() => {
        
    //     fetchData();
        
    // }, []);

    useEffect(() => {
        db.collection("forum")
        .get()
        .then(querySnapshot => {
            const items = querySnapshot.docs.map(doc => {
                return { ...doc.data(), realId: doc.id }
            }
            );
            console.log(items)
            setLoaded(true)
            setData(items)
        }); 
    }, []);



    return (
        <div className="forum">


            {/*Title and Button  */}
            <div className='fixedSubmit'>
                <div className='submit'>
                    <SubmitButton />
                </div>

                <div className="stats">
                    <p>{data.length} people have shared their stories</p>
                </div>

            </div>

            <div className='stories-container'>
                {console.log(data.length)}
                <div className='stories1'>
                    {Loaded
                        ? <ForumMap data={data} />
                        : <PlaceHolder />}


                </div>
            </div>

        </div >



    )
}




