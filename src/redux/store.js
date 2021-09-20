import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { channelReducer } from './reducers/channelReducer'
import { relatedVideosReducer, 
    searchedVideosReducer, 
    selectedVideosReducer, 
    videoReducer 
    } from './reducers/videoReducer'
import { commentVideosReducer } from './reducers/commentsReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    homeVideo: videoReducer,
    selectedVideos: selectedVideosReducer,
    channelDetail: channelReducer,
    commentList: commentVideosReducer,
    relatedVideos: relatedVideosReducer,
    searchedVideos: searchedVideosReducer
})

const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store