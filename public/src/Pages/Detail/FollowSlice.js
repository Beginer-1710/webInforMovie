import { createSlice } from "@reduxjs/toolkit";




const FollowSlice = createSlice({
    name : "Follow",
    initialState : {
            listFollow : JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("user"))?.username)) || []
    },
    reducers : {
        AddItem(state,action){
           
            let isInclude = false;
            state.listFollow.forEach((item) => {
                if(item.id === action.payload.id){
                    isInclude = true;
                }
            })
            if(!isInclude)
            {
                state.listFollow.push(action.payload);
                localStorage.setItem(JSON.parse(localStorage.getItem("user"))?.username,JSON.stringify(state.listFollow))
            }
        },
        RemoveItem(state,action){
            state.listFollow.splice(action.payload,1)
            localStorage.setItem(JSON.parse(localStorage.getItem("user"))?.username,JSON.stringify(state.listFollow))
        }
    }
    
})

const {actions , reducer} = FollowSlice ;
export const {AddItem,RemoveItem} = actions;
export default reducer;