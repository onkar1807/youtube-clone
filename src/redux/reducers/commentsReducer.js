import { COMMENT_LIST_FAILS, 
    COMMENT_LIST_REQUEST, 
    COMMENT_LIST_SUCCESS 
    } from "../actionType"

export const commentVideosReducer = (state = {
    loading: false,
    comments: null
}, action) => {
    switch(action.type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }

        case COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }

        case COMMENT_LIST_FAILS:
            return {
                ...state,
                loading: false,
                error: action.payload,
                comments: null
            }
        
        default: 
            return state
    }
}