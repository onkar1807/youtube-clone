import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import moment from 'moment'
import numeral from 'numeral'
import {AiFillEye} from 'react-icons/ai'
import './videohorizontal.scss'
import { Col, Row } from 'react-bootstrap';
import axios from '../../api'
import { useHistory } from 'react-router';


const VideoHorizontal = ({ video, searchScreen }) => {

    const {
        id,
        snippet: {channelId, channeltitle, description, title, publishedAt, thumbnails: {medium}}
    } = video;

    const isVideo = id.kind === 'youtube#video'
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
        get_video_details()
    },[id])

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

    const handleClick = () => {
        history.push(`/watch/${id.videoId}`)
    }

    return (
        <Row 
            className="videoHorizontal m-1 py-2 align-items-center"
            onClick={handleClick}
            >
            <Col 
                xs={6} 
                md={searchScreen ? 4 : 6}
                className="videoHorizontal_left"
            >
                <LazyLoadImage 
                    src={medium.url}
                    effect="blur" 
                    className="videoHorizontal_thumbnail"
                    wrapperClassName="videoHorizontal_thumbnail-wrapper"
                />
                <span className="videoHorizontal_duration">{_duration}</span>
            </Col>

            <Col 
                xs={6} 
                md={searchScreen ? 8 : 6}
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

                {isVideo && <p className="mt-1">{description}</p>}
                <div className="videoHorizontal_channel d-flex align-items-center my-1">
                    { isVideo &&
                        <LazyLoadImage 
                            src={channelIcon?.url}
                            effect="blue" 
                        />
                    }
                    <p className="mb-0">{channeltitle}</p>
                </div>
            </Col>
        </Row>
    )
}

export default VideoHorizontal
