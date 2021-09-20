import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsByVideoId } from '../../redux/action/commentsAction.js';
import Comment from '../comment/Comment.js'
import './comments.scss'

const Comments = ({ videoId, totalComments }) => {

    const [newComment, setNewComment] = useState('');

    const comments = useSelector(state => state.commentList.comments)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCommentsByVideoId(videoId))
    },[dispatch, videoId])


    const _commets = comments?.map(comment => comment.snippet.topLevelComment.snippet)
    console.log(_commets);

    const handleComment = (e) => {
        e.preventDefault()
        if(!newComment) return
        dispatch(addComment(videoId, newComment))
        setNewComment('')
    }

    return (
        <div className="comments">
            <p>{totalComments} Comments</p>

            <div className="comments_form d-flex w-100 my-2">
                <img
                    src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                    alt=""
                    className="rounded-circle mr-3"
                />
                <form onSubmit={handleComment} className="d-flex flex-grow-1">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e)=>setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="flex-grow-1"
                    />
                    <button 
                        className="border-0 p-2"
                    >
                        Comment
                    </button>
                </form>
            </div>

            <div className="comments_list">
                {
                    _commets?.map((comment, index) => (
                        <Comment comment={comment} key={index} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Comments
