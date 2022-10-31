import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// data 값으로 {name: string, password: string}이렇게 넣는다
// body 값 가져오는거 물어봐야됨
export const __loginDB = createAsyncThunk(
	"user/loginDB",
	async (payload, thunkAPI) => {
		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/members/login`,
				payload,
			);
			const accessToken = response.headers.authorization;
			const refreshToken = response.headers["refresh-token"];
			const userRole = response.headers["user-role"];
			// console.log("res", response);
			if (response.status === 200 || response.status === 201) {
				window.localStorage.setItem("accessToken", accessToken);
				window.localStorage.setItem("refreshToken", refreshToken);
				window.localStorage.setItem("user-role", userRole);
				alert(response.data.data);
				return thunkAPI.fulfillWithValue(response.data);
			}
		} catch (error) {
			if (400 < error.response.status && error.response.status < 500) {
				// window.location.reload();

				alert("로그인 실패");
			}
			return thunkAPI.rejectWithValue(error);
		}
	},
);

const initialState = {
	isLogin: false,
	userRole: "",
	error: null,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		handleLoginDispatch: state => {
			state.isLogin = true;
		},
	},
	extraReducers: {
		[__loginDB.fulfilled]: state => {
			state.isLogin = true;
			localStorage.setItem("isLogin", true);
		},
		[__loginDB.rejected]: (state, action) => {
			state.isLogin = false;
			state.error = action.payload;
		},
	},
});

export default loginSlice.reducer;
export const loginAction = loginSlice.actions;
