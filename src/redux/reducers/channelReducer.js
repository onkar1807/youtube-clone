import { CHANNEL_DETAIL_FAILS, 
    CHANNEL_DETAIL_REQUEST, 
    CHANNEL_DETAIL_SUCCESS, 
    GET_SUBSCRIPTION_STATUS
    } from "../actionType"

const initialState = {
    channel: null,
    loading: false,
    subsriptionStatus: false
}


export const channelReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANNEL_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            }
        
        case CHANNEL_DETAIL_SUCCESS:
            return {
                ...state,
                channel: action.payload,
                loading: false
            }

        case CHANNEL_DETAIL_FAILS:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_SUBSCRIPTION_STATUS:
            return {
                ...state,
                subsriptionStatus: action.payload
            }
        default:
            return state
    }
}