import { HOME_VIDEO_FAILURE, HOME_VIDEO_REQUEST, HOME_VIDEO_SUCCESS } from "../actionType"

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null
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
                videos: action.payload.videos,
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