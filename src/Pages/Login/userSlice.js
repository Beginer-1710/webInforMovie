import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useApi from "../../api/LoginApi/userApi";


export const register = createAsyncThunk(
    'user/register',
    async (payload) => {
        const respone = await useApi.register(payload);

        localStorage.setItem('access_token' , respone.data.jwt);
        localStorage.setItem('user' , JSON.stringify(respone.data.user));

        return respone.data.user;
    }
)

export const login = createAsyncThunk(
    'user/register',
    async (payload) => {
        const respone = await useApi.login(payload);

        localStorage.setItem('access_token' , respone.data.jwt);
        localStorage.setItem('user' , JSON.stringify(respone.data.user));

        return respone.data.user;
    }
)


const userSlice = createSlice({
    name : "user",
    initialState : {
        current : JSON.parse(localStorage.getItem("user")) || {}
    },
    reducers : {
        logOut(state){
            localStorage.removeItem('user');
            localStorage.removeItem('access_token')
            state.current = {};
        }
    },
    extraReducers : {
        [register.fulfilled] : (state, action) => {
            state.current = action.payload;
        },
        [login.fulfilled] : (state, action) => {
            state.current = action.payload;
        }
    }
})

const {actions , reducer} = userSlice ;
export const {logOut} = actions;
export default reducer;