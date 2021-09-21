import numeral from 'numeral';
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getChannelDetail } from '../../../redux/action/channelAction';
import { getVideosByChannel } from '../../../redux/action/videoAction';
import Video from '../../video/Video';
import './_channelScreen.scss';

const ChannelScreen = () => {

    const {channelId} = useParams();
    const {videos, loading} = useSelector(state => state.channelVideos)
    const {snippet, statistics} = useSelector(state => state.channelDetail.channel)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
        dispatch(getChannelDetail(channelId))
    },[channelId, dispatch])

    return (
        <>
            <div className="px-5 py-2 my-2 d-flex justify-content-between align-items-center channelHeader">
                <div className="channelHeader_left -flex align-items-center">
                    <img src={snippet?.thumbnails?.default?.url} aly="" />

                    <div className="ml-3 channelHeader_details">
                        <h3>{snippet?.title}</h3>
                        <span>
                            {numeral(statistics?.subscriberCount).format('0.a')}{' '}
                            subscribers
                        </span>
                    </div>
                </div>

                <button>Subscribe</button>
            </div>

            <Container>
                <Row className="mt-2">
                    {!loading ?
                        videos.map(video => (
                            <Col md={4} lg={3}>
                                <Video video={video} channelScreen />
                            </Col>
                        ))
                        : 
                        [...Array(20)].map(() => (
                            <Col md={4} lg={3}>
                                <SkeletonTheme color="#343n40" highlightColor="#3c4147">
                                    <Skeleton width="100%" height="140px" />
                                </SkeletonTheme>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    )
}

export default ChannelScreen
