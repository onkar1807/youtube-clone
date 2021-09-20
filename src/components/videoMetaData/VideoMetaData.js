import React, { useEffect } from 'react'
import './videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'
import ShowMoreText from 'react-show-more-text'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { channelSubscriptionStatus, getChannelDetail } from '../../redux/action/channelAction'


const VideoMetaData = ({ video, videoId, match }) => {
    
    const dispatch = useDispatch();
    const { 
        channel
    } = useSelector(state => state.channelDetail)
  
    const {subsriptionStatus} = useSelector(state => state.channelDetail)
    
    // const { channelId, channelTitle, description, title, publishedAt } = video?.snippet;
    // const { viewCount, likeCount, dislikeCount } = video?.statistics;

    useEffect(() => {
        dispatch(getChannelDetail(video?.snippet?.channelId))
        dispatch(channelSubscriptionStatus(video?.snippet?.channelId))
    },[video?.snippet?.channelId, dispatch])

    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData_top">
                <h5>{video?.statistics?.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        {numeral(video?.statistics?.viewCount).format("0.a")} views •
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </span>

                    <div>
                        <span className="mx-3">
                            <MdThumbUp size={26} /> 
                            {numeral(video?.statistics?.likeCount).format("0.a")}
                        </span>
                        <span className="">
                            <MdThumbDown size={26} />
                            {numeral(video?.statistics?.dislikeCount).format("0.a")}
                        </span>
                    </div>
                </div>
            </div>

            <div className="videoMetaData_channel d-flex justify-content-between align-items-center my-2 py-3">
                <div className="d-flex">
                    <img
                        src={channel?.snippet?.thumbnails?.default?.url}
                        alt=""
                        className="rounded-circle mr-3"
                    />

                    <div className="d-flex flex-column mx-3">
                        <span>{video?.snippet?.channelTitle}</span>
                        <span>{numeral(channel?.statistics?.subscriberCount).format("0.a")} Subscribers</span>
                    </div>
                </div>

                <button className={`btn border-0 m-2 p-2 ${subsriptionStatus && 'btn-gray'}`}>
                    {subsriptionStatus ? 'Subscribed' : 'Subscribe'}
                </button>
            </div>

            <div className="videoMetaData_description"> 
                <ShowMoreText
                    lines={3}
                    more="SHOW MORE"
                    less="SHOW LESS"
                    anchorClass="showMoreText"
                    expanded={false}
                >
                    {video?.snippet?.description}
                </ShowMoreText>
            </div> 
        </div>
    )
}

export default VideoMetaData
