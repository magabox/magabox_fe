import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const userRole = localStorage.getItem("user-role");




export const __AddComment = createAsyncThunk(
    "ADD_COMMENT",
    async (payload,thunkAPI)=>{
        try{
            const {id, rating, comment} = payload
            const {data} = await axios.post(`${serverUrl}/comments/${id}`,{rating,comment},
            {headers: {
                Authorization: accessToken,
                refreshToken,
                userRole,
                "Content-Type": "application/json",
            }}
            )
            return thunkAPI.fulfillWithValue(payload)
        }catch(e){
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

const initialState = {
    isLoading : false,
    comments : []
}

const commentSlice = createSlice({
    name : "comment",
    initialState,
    reducers : {},
    extraReducers : {
        [__AddComment.pending] : (state,action)=>{
            state.isLoading = true
        },
        [__AddComment.fulfilled] : (state,action)=>{
            state.isLoading = false
            state.comments.push(action.payload)
        },
        [__AddComment.rejected] : (state,action)=>{
            state.isLoading = false
        }
    }
})

export const {} = commentSlice.actions
export default commentSlice.reducer