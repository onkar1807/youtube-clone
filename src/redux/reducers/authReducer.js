import { LOAD_PROFILE, 
    LOGIN_FAILURE, 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOG_OUT
} from "../actionType"

const initialState = {
    accesstoken: sessionStorage.getItem("ytc-access-token") 
        ? sessionStorage.getItem("ytc-access-token") 
        : null ,
    user: sessionStorage.getItem("ytc-profile") 
        ? JSON.parse(sessionStorage.getItem("ytc-profile")) 
        : null ,
    loading: false,
}


export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                ...state,
                accesstoken: action.payload,
                loading: false
            }

        case LOGIN_FAILURE:
            return {
                ...state,
                accesstoken: null,
                loading: false,
                error: action.payload
            }

        case LOAD_PROFILE:
            return {
                ...state,
                user: action.payload
            }

        case LOG_OUT:
            return {
                ...state,
                accesstoken: null,
                user: null
            }

        default:
            return state
    }
}