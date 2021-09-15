import { HOME_VIDEO_FAILURE, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS, SELECTED_VIDEO_FAILURE, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actionType"

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