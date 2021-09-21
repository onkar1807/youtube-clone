import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import {AiFillEye} from 'react-icons/ai'
import './videohorizontal.scss'
import { Col, Row } from 'react-bootstrap';
import axios from '../../api'
import { useHistory } from 'react-router';


const VideoHorizontal = ({ video, searchScreen, subScreen }) => {

    const {
        id,
        snippet: {channelId, channeltitle, description, title, publishedAt, resourceId,  thumbnails: {medium}}
    } = video;

    const isVideo = !(id.kind === 'youtube#channel' || subScreen)
    const [views, setViews] = useState(null);
    const [duration, setDuration] = useState(null);
    const [channelIcon, setChannelIcon] = useState(null);


    useEffect(() => {
        const get_video_details = async () => {
            const {data: {items}} = await axios('/videos', {
                params: {
                    part: 'contentDetails, statistics',
                    id: id.videoId,
                }
            })
            setDuration(items[0].contentDetails.duration)
            setViews(items[0].statistics.viewCount)
        }
        if(isVideo){
            get_video_details()
        }
    },[id, isVideo])

    useEffect(() => {
        const get_channel_icon = async () => {
            const {data: {items}} = await axios('/channels', {
                params: {
                    part: 'snippet',
                    id: channelId,
                }
            })
            setChannelIcon(items[0].snippet.thumbnails.default)
        }
        get_channel_icon()
    },[channelId])


    const seconds = moment.duration(duration).asSeconds();
    const _duration = moment.utc(seconds * 1000).format("mm:ss");

    const history = useHistory();

    const _channelId = resourceId?.channelId || channelId

    const handleClick = () => {
        isVideo 
        ? history.push(`/watch/${id.videoId}`)
        : history.push(`/channel/${_channelId}`)
        
    }

    const thumbnail = !isVideo && 'videoHorizontal_thumbnail-channel'

    return (
        <Row 
            className="videoHorizontal m-1 py-2 align-items-center"
            onClick={handleClick}
            >
            <Col 
                xs={6} 
                md={searchScreen || subScreen ? 4 : 6}
                className="videoHorizontal_left"
            >
                <LazyLoadImage 
                    src={medium.url}
                    effect="blur" 
                    className={`videoHorizontal_thumbnail ${thumbnail}`}
                    wrapperClassName="videoHorizontal_thumbnail-wrapper"
                />
                {isVideo && <span className="videoHorizontal_duration">{_duration}</span>}
            </Col>

            <Col 
                xs={6} 
                md={searchScreen || subScreen ? 8 : 6}
                className="videoHorizontal_right"
            >
                <p className="videoHorizontal_title mb-1">
                    {title}
                </p>

                {
                    isVideo &&
                    <div className="videoHorizontal_details">
                        <AiFillEye /> {numeral(views).format("0.a")} views •
                        <span>{moment(publishedAt).fromNow()}</span>
                    </div>
                }

                {searchScreen || subScreen && <p className="mt-1 videoHorizontal_desc">{description}</p>}
                <div className="videoHorizontal_channel d-flex align-items-center my-1">
                    { isVideo &&
                        <LazyLoadImage 
                            src={channelIcon?.url}
                            effect="blue" 
                        />
                    }
                    <p className="mb-0">{channeltitle}</p>
                </div>
                {   subScreen &&
                    <p className="mt-2">
                        {video.contentDetails.totalItemCount}{' '}Videos
                    </p>
                }
            </Col>
        </Row>
    )
}

export default VideoHorizontal
