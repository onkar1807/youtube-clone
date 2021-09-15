import React from 'react'
import moment from 'moment'
import './_comment.scss'

const Comment = () => {
    return (
        <div className="comment d-flex p-2">
            <img
                src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                alt=""
                className="rounded-circle mr-3"
            />

            <div className="comment_body">
                <p className="comment_header">
                    Onkar Magdum • {moment('2021-05-09').fromNow()}
                </p>
                <p>Nice video Dude!!</p>
            </div>
        </div>
    )
}

export default Comment
