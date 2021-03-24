import React, { useEffect, useState } from 'react';
import "./Forum.css"
import ForumMap from '../../Components/forum/forumMap'
import data1 from '../../Components/forum/forumDummy1.js'
import data2 from '../../Components/forum/forumDummy2.js'
// import Map1 from '../../Components/maps/map1'
// import Map3 from '../../Components/maps/map3' 
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



            {/* Top chart in forum */}

            <div className='mapTitle'>Types of Discrimination(N = 3,795) against Asians (Mar 19, 2020 to Feb 28, 2021)</div>
            <div className='maps'>

                {/* <Map1/> */}

            </div>


            {/* the title of forum */}
            <div className='forumT'>Forum</div>





            <div className='stories-container'>
                {/* {data.map(d => d % 2 ==0 ?  
            <div className="stories1"> <ForumMap data={d} /></div> : 
            <div className="stories2"> <ForumMap data={d} /> </div>
      
            )} */}
                {console.log(data)}


                <div className='stories1'>

                    <ForumMap data={data} />

                </div>


                {/* <div className='stories2'>
                    <ForumMap data={data2} />
                </div> */}



                <div className="submit-container">
                    <div className='submit'>
                        <SubmitButton />
                    </div>
                    <div className="stats">
                        <p>XXX people from XXX cities have shared their stories</p>
                    </div>
                </div>




            </div>
            <div className='forumT'>Data</div>
            <div className='map-bottom'>
                <div className='mapTitle'>Ethnicity of Respondants (N = 3,795) of Discriminations against Asians (Mar 19, 2020 to Feb 28, 2021)</div>

                {/* <Map3/> */}
            </div>

        </div>
           
        

    )
}
