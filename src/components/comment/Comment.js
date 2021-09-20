import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = ({ comment }) => {

    const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = comment;
    
    return (
        <div className="comment d-flex p-2">
            <img
                src={authorProfileImageUrl}
                alt=""
                className="rounded-circle mr-3"
            />

            <div className="comment_body">
                <p className="comment_header">
                    {authorDisplayName} • {moment(publishedAt).fromNow()}
                </p>
                <p>{textDisplay}</p>
            </div>
        </div>
    )
}

export default Comment
