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

export const __UpdateComment = createAsyncThunk(
    "UPDATE_COMMENT",
    async (payload,thunkAPI)=>{
        try{
            const {data} = await axios.put(`${serverUrl}/comments/{commentId}`,payload,
            {headers: {
                Authorization: accessToken,
                refreshToken,
                userRole,
                "Content-Type": "application/json",
            }}
            
            )
            return thunkAPI.fulfillWithValue(data)
        }catch(e){
            return thunkAPI.rejectWithValue(e.code)
        }
    }
)

const __DeleteComment = createAsyncThunk(
    "DELETE_COMMENT",
    async (payload,thunkAPI)=>{
        try{
            const {data} = await axios.delete(`${serverUrl}/comments/{commentId}`,
            {headers : {
                Authorization : accessToken,
                refreshToken,
                userRole,
                "Content-Type" : "application/json",
            }}
            
            )
            return thunkAPI.fulfillWithValue(data)
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
        },
        [__UpdateComment.pending]:(state,action)=>{
            state.isLoading = true
        },
        [__UpdateComment.fulfilled]:(state,action)=>{
            const target = state.comments.findIndex((comment)=>{
               return comment.id === action.payload.id
            });
            state.comments.splice(target,1,action.payload)
            state.isLoading = false
        },
        [__UpdateComment.rejected]:(state,action)=>{
            state.isLoading = false
        },
        [__DeleteComment.pending]:(state,action)=>{
            state.isLoading = true
        },
        [__DeleteComment.fulfilled]:(state,action)=>{
            state.isLoading = false
            const target = state.comments.filter((comment)=>{
                return comment.id !== action.payload.id
            })
            state.comments = target;
        }
    }
})

export const {} = commentSlice.actions
export default commentSlice.reducer