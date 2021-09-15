import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/action/videoAction'
import CategoriesBar from '../categoriesBar/CategoriesBar'
import InfiniteScroll from 'react-infinite-scroll-component'
import Video from '../video/Video'
import SkeletonVideo from '../skeleton/SkeletonVideo'


const HomeScreen = () => {

    const { videos, activeCategory, loading } = useSelector(state => state.homeVideo);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularVideos())
    }, [dispatch])


    const fetchData = () => {
        if(activeCategory === 'All'){
            dispatch(getPopularVideos())
        } else {
            dispatch(getVideosByCategory(activeCategory))
        }
    }

    return (
        <Container>
            <CategoriesBar />


            <InfiniteScroll
                dataLength={videos.length}
                next={fetchData}
                hasMore={true}
                loader={
                    <div className="spinner-border text-danger d-block mx-auto"></div>
                }
            >
                <Row>
                    {
                        !loading ?
                            (videos.map((video, idx) => (
                                <Col lg={3} md={4} key={idx}>
                                    <Video video={video} />
                                </Col>
                            )))
                        :  [...Array(20)].map(() => (
                            <Col lg={3} md={4}>
                                <SkeletonVideo /> 
                            </Col>
                        ))
                    }
                </Row>
            </InfiniteScroll>

        </Container>
    )
}

export default HomeScreen
