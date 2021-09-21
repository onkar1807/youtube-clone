import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getSubscriptionChannel } from '../../../redux/action/videoAction';
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal';
import './_subscriptions.scss'

const Subscriptions = () => {
    
    const dispatch = useDispatch();
    const {videos, loading} = useSelector(state => state.subscriptionChannel);

    useEffect(() => {
        dispatch(getSubscriptionChannel())
    },[dispatch])

    return (
        <Container fluid>
            {
                !loading ?
                videos?.map(video => <VideoHorizontal video={video} key={video.id} subScreen />)
                :
                <SkeletonTheme color="#343n40" highlightColor="#3c4147">
                    <Skeleton width="100%" height="160px" count={20} />
                </SkeletonTheme>
            }
        </Container>
    )
}

export default Subscriptions
