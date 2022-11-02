import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../../api";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("refreshToken");
const userRole = localStorage.getItem("user-role");


export const __getBoxOffice = createAsyncThunk(
	"BOX_OFFICE",
	async (payload, thunkAPI) => {
		try {
			const { data } = await axios.get(`${serverUrl}/movies/index`);
			return thunkAPI.fulfillWithValue(data.data);
		} catch (e) {
			return thunkAPI.rejectWithValue(e.code);
		}
	},
);


export const __getByMovieId = createAsyncThunk(
    "GET_BY_ID",
	async(payload,thunkAPI)=>{
		try{
			const {data} = await axios.get(`${serverUrl}/movies/${payload}`,
            {headers: {
                Authorization: accessToken,
                refreshToken,
                userRole,
                "Content-Type": "application/json",
            }})
            return thunkAPI.fulfillWithValue(data)
		}catch(e){
            return thunkAPI.rejectWithValue(e.code)
        }
	}
)

const initialState = {
	isLoading: false,
	error: null,
	boxoffices: [],
    detailData : []
};

const boxOfficeSlice = createSlice({
	name: "boxoffice",
	initialState,
	reducers: {},
	extraReducers: {
		[__getBoxOffice.pending]: (state, action) => {
			state.isLoading = true;
		},
		[__getBoxOffice.fulfilled]: (state, action) => {
			state.boxoffices = action.payload;
			state.isLoading = false;
		},
		[__getBoxOffice.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
        [__getByMovieId.pending]: (state,action)=>{
            state.isLoading = true
        },
        [__getByMovieId.fulfilled]: (state,action)=> {
            state.isLoading = false
            state.detailData = action.payload
        },
        [__getByMovieId.rejected]: (state,action)=> {
            state.isLoading = false
        }
	},
});

export const {} = boxOfficeSlice.actions;
export default boxOfficeSlice.reducer;
