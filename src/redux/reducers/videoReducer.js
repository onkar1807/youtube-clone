import { CHANNEL_DETAIL_FAILS,
     CHANNEL_DETAIL_REQUEST, 
    CHANNEL_VIDEOS_SUCCESS, 
    HOME_VIDEO_FAILURE, 
    HOME_VIDEO_REQUEST,
    HOME_VIDEO_SUCCESS, 
    RELATED_VIDEO_FAILS, 
    RELATED_VIDEO_REQUEST, 
    RELATED_VIDEO_SUCCESS, 
    SEARCH_VIDEO_FAILS, 
    SEARCH_VIDEO_REQUEST, 
    SEARCH_VIDEO_SUCCESS, 
    SELECTED_VIDEO_FAILURE, 
    SELECTED_VIDEO_REQUEST, 
    SELECTED_VIDEO_SUCCESS, 
    SUBSCRIPTION_VIDEO_FAILS, 
    SUBSCRIPTION_VIDEO_REQUEST,
    SUBSCRIPTION_VIDEO_SUCCESS
    } from "../actionType"

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
}


export const videoReducer = (state = initialState, action) => {
    switch(action.type) {
        case HOME_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case HOME_VIDEO_SUCCESS:
            return {
                ...state,
                videos: state.activeCategory === action.payload.category 
                ? [...state.videos, ...action.payload.videos] 
                : action.payload.videos,
                activeCategory: action.payload.category,
                nextPageToken: action.payload.nextPageToken,
                loading: false
            }

        case HOME_VIDEO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}


export const selectedVideosReducer = (state = {
    loading: false,
    video: null
}, action) => {
    switch(action.type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: action.payload,
                loading: false
            }

        case SELECTED_VIDEO_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                video: null
            }
        
        default: 
            return state
    }
}


export const relatedVideosReducer = (state = {
    videoLoading: false,
    videos: []
}, action) => {
    switch(action.type) {
        case RELATED_VIDEO_REQUEST:
            return {
                ...state,
                videoLoading: true
            }

        case RELATED_VIDEO_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                videoLoading: false
            }

        case RELATED_VIDEO_FAILS:
            return {
                ...state,
                videoLoading: false,
                error: action.payload,
            }
        
        default: 
            return state
    }
}


export const searchedVideosReducer = (state = {
    videoLoading: false,
    videos: []
}, action) => {
    switch(action.type) {
        case SEARCH_VIDEO_REQUEST:
            return {
                ...state,
                videoLoading: true
            }

        case SEARCH_VIDEO_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                videoLoading: false
            }

        case SEARCH_VIDEO_FAILS:
            return {
                ...state,
                videoLoading: false,
                error: action.payload,
            }
        
        default: 
            return state
    }
}


export const getSubscriptionChannelReducer = (state = {
    loading: false,
    videos: []
}, action) => {
    switch(action.type) {
        case SUBSCRIPTION_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SUBSCRIPTION_VIDEO_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }

        case SUBSCRIPTION_VIDEO_FAILS:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        default: 
            return state
    }
}


export const getChannelVideosReducer = (state = {
    loading: false,
    videos: []
}, action) => {
    switch(action.type) {
        case CHANNEL_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CHANNEL_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }

        case CHANNEL_DETAIL_FAILS:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        
        default: 
            return state
    }
}