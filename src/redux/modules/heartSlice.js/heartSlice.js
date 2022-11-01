import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { serverUrl } from "../../api"
import axios from "axios";
import { useDispatch } from "react-redux";
import { __getBoxOffice } from "../boxOffice/boxOfiiceSlice";



const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const userRole = localStorage.getItem("user-role");








export const __heart = createAsyncThunk(
    "HEART",
    async (payload,thunkAPI)=>{
        try{
            const {data} = await axios.post(`${serverUrl}/hearts/${payload}`,payload,
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


const initialState = {
    isLoading : false,
    error : null,
    heartData : []
}
const heartSlice = createSlice({
    name : "heart",
    initialState,
    reducers : {},
    extraReducers : {
        [__heart.pending]:(state,actioin)=>{
            state.isLoading = true
        },
        [__heart.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.heartData = action.payload

        },
        [__heart.rejected]:(state,action)=>{
            state.isLoading = false
        }
    }
})

export const {} = heartSlice.actions
export default heartSlice.reducer
