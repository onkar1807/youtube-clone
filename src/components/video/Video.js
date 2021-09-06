import React from 'react'
import './_video.scss'
import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video_top">
                <img src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png" alt="" />
                <span>0.5:43</span>
            </div>

            <div className="video_title">
                create app in 5 min # made by chintu
            </div>

            <div className="video_details">
                <span>
                    <AiFillEye /> 5m views •
                </span>
                <span>5days ago</span>
            </div>

            <div className="video_channel">
                <img src="" alt="" />
                <p>Rainbow Hat Jr</p>
            </div>
        </div>
    )
}

export default Video
