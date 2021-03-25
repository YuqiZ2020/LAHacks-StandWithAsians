import React from 'react'
import {useParams} from "react-router-dom"
import Disqus from "disqus-react"

export default function ForumDiscussion(){
    const disqusShortname = "stop-asian-hate"
    const disqusConfig = {
      url: "https://stop-asian-hate.disqus.com/"+useParams().postId,
      identifier: useParams().postId,
      title: "Title of Your Article"
    }
    // console.log(useParams().postId)
    return(
        <div className="forum">

        <Disqus.DiscussionEmbed
            shortname={disqusShortname}
            config={disqusConfig}
            showMedia={true}
            showParentComment={true}
            />
        </div>
    )
}