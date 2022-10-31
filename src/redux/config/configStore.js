import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/user/login";
import boxoffice from "../modules/boxOffice/boxOfiiceSlice"

const store = configureStore({
	reducer: {
		login,
		boxoffice
	},
	// middleware: getDefaultMiddleware({
	// 	serializableCheck: false,
	// }),
});

export default store;
