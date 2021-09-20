import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { getVideosBySearch } from '../../redux/action/videoAction';
import VideoHorizontal from '../videoHorizontal/VideoHorizontal'

const SearchScreen = () => {

    const { query } = useParams();

    const {videos, loading} = useSelector(state => state.searchedVideos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosBySearch(query))
    },[query, dispatch])

    return (
        <Container>
            {
                !loading ?
                videos?.map(video => <VideoHorizontal video={video} key={video.id.videoId} searchScreen/>)
                : <h>Loading...</h>
            }
        </Container>
    )
}

export default SearchScreen
