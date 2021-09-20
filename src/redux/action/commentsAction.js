import { ADD_COMMENT_SUCCESS, 
    ADD_COMMENT_FAIL,
    COMMENT_LIST_FAILS, 
    COMMENT_LIST_REQUEST, 
    COMMENT_LIST_SUCCESS 
    } from "../actionType";
import axios from '../../api'

export const getCommentsByVideoId = (id) => async (dispatch) => {
    try {
        dispatch({ type: COMMENT_LIST_REQUEST })

        const {data} = await axios('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id
            }
        })
        
        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data?.items
        })
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({
            type: COMMENT_LIST_FAILS,
            payload: error.response.data.message
        })
    }
}


export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text,
                    }
                }
            }
        }

        await axios.post('/commentThreads', obj, {
            params: {
                part: 'snippet'
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })
        
        dispatch({
            type: ADD_COMMENT_SUCCESS,
        })

        setTimeout(() => {
            dispatch(getCommentsByVideoId(id))
        },3000)
        
    } catch (error) {
        console.log(error.response.data.message);
        dispatch({
            type: ADD_COMMENT_FAIL,
            payload: error.response.data.message
        })
    }
}
