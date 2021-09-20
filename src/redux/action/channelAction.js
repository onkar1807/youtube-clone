import { CHANNEL_DETAIL_FAILS, 
    CHANNEL_DETAIL_REQUEST, 
    CHANNEL_DETAIL_SUCCESS, 
    GET_SUBSCRIPTION_STATUS
    } from "../actionType";
import axios from '../../api'   

export const getChannelDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: CHANNEL_DETAIL_REQUEST })

        const {data} = await axios('/channels', {
            params: {
                part: 'snippet, statistics, contentDetails',
                id: id
            }
        })

        dispatch({
            type: CHANNEL_DETAIL_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.response.data);
        dispatch({
            type: CHANNEL_DETAIL_FAILS,
            payload: error.response.data
        })
    }
}


export const channelSubscriptionStatus = (id) => async (dispatch, getState) => {
    try {

        const {data} = await axios('/subscriptions', {
            params: {
                part: 'snippet',
                forChannelId: id,
                mine: true
            },
            headers: {
                Authorization: `Bearer ${getState()?.auth.accessToken}`,
            }
        })

        dispatch({
            type: GET_SUBSCRIPTION_STATUS,
            payload: data.items.length !== 0
        })
    } catch (error) {
        console.log(error.response.data);
    }
}