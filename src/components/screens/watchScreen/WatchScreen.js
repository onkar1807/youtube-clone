import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getRelatedVideos, getVideoById } from '../../../redux/action/videoAction';
import Comments from '../../comments/Comments';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import './watchScreen.scss';

const WatchScreen = () => {

    const {id} = useParams();
    const {video, loading} = useSelector(state => state.selectedVideos);
    const {videos, videoLoading} = useSelector(state => state.relatedVideos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id))
        dispatch(getRelatedVideos(id))
    }, [dispatch, id])
    
    return (
        <Row>
            <Col lg={8}>
                <div className="watchScreen_player">
                    <iframe 
                        src={`https://www.youtube.com/embed/${id}`}
                        frameBorder="0"
                        title={video?.snippet?.title}
                        allowFullScreen
                        width="100%"
                        height="100%"
                    ></iframe>
                </div>

                {
                    !loading ? <VideoMetaData video={video} videoId={id} /> : <h6>Loading...</h6>
                }
                
                <Comments videoId={id} totalComments={video?.statistics?.commentCount} />
            </Col>

            <Col lg={4}>
                {   
                    !videoLoading ?
                    videos
                    ?.filter(video => video.snippet)
                    .map(video => (
                        <VideoHorizontal key={video.id.videoId} video={video} />
                    ))
                    :
                    <SkeletonTheme color="#343n40" highlightColor="#3c4147">
                        <Skeleton width="100%" height="130px" count={15} />
                    </SkeletonTheme>
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
