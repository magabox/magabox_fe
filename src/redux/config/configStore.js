import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/user/login";
import movie from "../modules/movie/movieEdit";

const store = configureStore({
	reducer: {
		login,
		movie,
	},
	// middleware: getDefaultMiddleware({
	// 	serializableCheck: false,
	// }),
});

export default store;
