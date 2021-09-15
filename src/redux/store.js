import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { selectedVideosReducer, videoReducer } from './reducers/videoReducer'


const rootReducer = combineReducers({
    auth: authReducer,
    homeVideo: videoReducer,
    selectedVideos: selectedVideosReducer
})

const store = createStore(
    rootReducer, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store