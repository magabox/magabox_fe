import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/user/login";
import movie from "../modules/movie/movieEdit";
import boxoffice from "../modules/boxOffice/boxOfiiceSlice";
import heart from "../modules/heartSlice.js/heartSlice";

const store = configureStore({
	reducer: {
		login,
		movie,
		boxoffice,
		heart
	},
	// middleware: getDefaultMiddleware({
	// 	serializableCheck: false,
	// }),
});

export default store;
