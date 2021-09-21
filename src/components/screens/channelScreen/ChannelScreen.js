import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { getVideosByChannel } from '../../../redux/action/videoAction';

const ChannelScreen = () => {

    const {channelId} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideosByChannel(channelId))
    },[channelId])

    return (
        <div>
            ChannelScreen
        </div>
    )
}

export default ChannelScreen
