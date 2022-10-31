import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/user/login";
import movie from "../modules/movie/movieEdit";
import boxoffice from "../modules/boxOffice/boxOfiiceSlice";

const store = configureStore({
	reducer: {
		login,
		movie,
		boxoffice,
	},
	// middleware: getDefaultMiddleware({
	// 	serializableCheck: false,
	// }),
});

export default store;
