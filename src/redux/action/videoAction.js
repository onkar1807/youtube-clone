import { HOME_VIDEO_FAILURE, HOME_VIDEO_SUCCESS, HOME_VIDEO_REQUEST } from "../actionType"
import axios from '../../api'


export const getPopularVideos = () => async (dispatch) => {
    try {
        dispatch({
            type: HOME_VIDEO_REQUEST
        })

        const {data} = await axios('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostpopular',
                regionCode: 'IN',
                maxResults: 20,
                pageToken: '',
            },
        })

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken
            }
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: HOME_VIDEO_FAILURE,
            payload: error.message
        })
    }
}