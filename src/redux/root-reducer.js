import { combineReducers} from 'redux'

import usernameReducer from './user/user.reducer'

export default combineReducers({
    currentUser: usernameReducer
})