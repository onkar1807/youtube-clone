import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos } from '../../redux/action/videoAction'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import Video from '../video/Video'

const HomeScreen = () => {

    const {videos} = useSelector(state => state.homeVideo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    },[dispatch])
    
    return (
        <Container>
            <CategoriesBar />

            <Row>
                {
                    videos.map((video, idx) => (
                        <Col lg={3} md={4} key={idx}>
                            <Video video={video} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default HomeScreen
