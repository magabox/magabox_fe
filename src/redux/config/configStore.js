import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/user/login";

const store = configureStore({
	reducer: {
		login,
	},
	// middleware: getDefaultMiddleware({
	// 	serializableCheck: false,
	// }),
});

export default store;
