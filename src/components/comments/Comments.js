import React from 'react'
import Comment from '../comment/Comment.js'
import './comments.scss'

const Comments = () => {

    const handleComment = () => {

    }

    return (
        <div className="comments">
            <p>1234</p>

            <div className="comments_form d-flex w-100 my-2">
                <img
                    src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                    alt=""
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        placeholder="Write a comment..."
                        className="flex-grow-1"
                    />
                    <button className="border-0 p-2">
                        Comment
                    </button>
                </form>
            </div>

            <div className="comments_list">
                {
                    [...Array(10)].map(() => (
                        <Comment />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Comments
