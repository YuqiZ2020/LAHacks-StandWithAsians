import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import Disqus from "disqus-react"
import ForumCard from "../../Components/forum/forumCard"
import {db} from "../../firebase"

export default function ForumDiscussion(){
    const [data, setData] = useState({})
    const dataId = useParams().postId
    const disqusShortname = "stop-asian-hate"
    const disqusConfig = {
      url: "https://stop-asian-hate.disqus.com/"+dataId,
      identifier: useParams().postId,
      title: "Title of Your Article"
    }
    console.log(useParams().postId)

    useEffect(() => {
        const docRef = db.collection("forum").doc(dataId)
        docRef.get().then((doc) =>{
            console.log(doc.data())
            setData(doc.data())
        })
    }, []);
    




    return(
        <div className="forum">
        <ForumCard data={data} key={data.realId} />


        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
            showMedia={true}
            showParentComment={true}
            />
        </div>
    )
}