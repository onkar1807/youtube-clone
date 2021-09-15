import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getVideoById } from '../../../redux/action/videoAction';
import Comments from '../../comments/Comments';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import VideoMetaData from '../../videoMetaData/VideoMetaData';
import './watchScreen.scss';

const WatchScreen = () => {

    const {id} = useParams();
    const {video, loading} = useSelector(state => state.selectedVideos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoById(id))
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
                
                <Comments />
            </Col>

            <Col lg={4}>
                {
                    [...Array(10)].map(() => (
                        <VideoHorizontal />
                    ))
                }
            </Col>
        </Row>
    )
}

export default WatchScreen
