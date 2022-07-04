
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Pages/Login/userSlice';
import followReducer from '../Pages/Detail/FollowSlice'
const rootReducer = {
    user : userReducer,
    follow : followReducer
}
const store = configureStore({
    reducer : rootReducer
})

export default store;