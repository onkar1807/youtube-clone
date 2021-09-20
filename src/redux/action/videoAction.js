import { HOME_VIDEO_FAILURE, 
    HOME_VIDEO_SUCCESS, 
    HOME_VIDEO_REQUEST, 
    SELECTED_VIDEO_REQUEST, 
    SELECTED_VIDEO_SUCCESS, 
    SELECTED_VIDEO_FAILURE,
    RELATED_VIDEO_REQUEST,
    RELATED_VIDEO_SUCCESS,
    RELATED_VIDEO_FAILS,
    SEARCH_VIDEO_REQUEST,
    SEARCH_VIDEO_SUCCESS,
    SEARCH_VIDEO_FAILS
} from "../actionType"
import axios from '../../api'


export const getPopularVideos = () => async (dispatch, getState) => {
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
                pageToken: getState().homeVideo.nextPageToken,
            },
        })

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All'
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


export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEO_REQUEST
        })

        const {data} = await axios('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                pageToken: getState().homeVideo.nextPageToken,
                q: keyword,
                type: 'video'
            },
        })

        dispatch({
            type: HOME_VIDEO_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: keyword
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


export const getVideoById = (id) => async (dispatch) => {
    try {
        dispatch({ type: SELECTED_VIDEO_REQUEST })

        const {data} = await axios('/videos', {
            params: {
                part: 'snippet, statistics',
                id: id
            }
        })

        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.message);
        dispatch({
            type: SELECTED_VIDEO_FAILURE,
            payload: error.message
        })
    }
}


export const getRelatedVideos = (id) => async (dispatch) => {
    try {
        dispatch({ type: RELATED_VIDEO_REQUEST })

        const {data} = await axios('/search', {
            params: {
                part: 'snippet',
                relatedToVideoId: id,
                maxResults: 15,
                type: 'video'
            }
        })

        dispatch({
            type: RELATED_VIDEO_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({
            type: RELATED_VIDEO_FAILS,
            payload: error.response.data.message
        })
    }
}


export const getVideosBySearch = (keyword) => async (dispatch) => {
    try {
        dispatch({
            type: SEARCH_VIDEO_REQUEST
        })

        const {data} = await axios('/search', {
            params: {
                part: 'snippet',
                maxResults: 20,
                q: keyword,
                type: 'video, channel'
            },
        })

        dispatch({
            type: SEARCH_VIDEO_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message)
        dispatch({
            type: SEARCH_VIDEO_FAILS,
            payload: error.message
        })
    }
}