import React from 'react'
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import ShowMoreText from 'react-show-more-text'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'

const VideoMetaData = ({ video: {snippet, statistics}, videoId }) => {
    
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData_top">
                <h5>Video Title</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        {numeral(1000000).format("0.a")} views •
                        {moment('2021-05-05').fromNow()}
                    </span>

                    <div>
                        <span className="mx-3">
                            <MdThumbUp size={26} /> 
                            {numeral(10000).format("0.a")}
                        </span>
                        <span className="">
                            <MdThumbDown size={26} />
                            {numeral(10000).format("0.a")}
                        </span>
                    </div>
                </div>
            </div>

            <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img
                        src="https://e7.pngegg.com/pngimages/340/946/png-clipart-avatar-user-computer-icons-software-developer-avatar-child-face-thumbnail.png"
                        alt=""
                        className="rounded-circle mr-3"
                    />

                    <div className="d-flex flex-column mx-3">
                        <span>Backbench Coder</span>
                        <span>{numeral(10000).format("0.a")} Subscribers</span>
                    </div>
                </div>

                <button className="btn border-0 m-2 p-2">Subscribe</button>
            </div>

            <div className="videoMetaData_description">
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in 
                    the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus PageMaker including 
                    versions of Lorem Ipsum.
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
