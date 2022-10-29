import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Join from "../pages/Join/Join";
import Detail from "../pages/Detail/Detail";
import MovieAdmin from "../pages/Movie/MovieAdmin";
import MovieEdit from "../pages/Movie/MovieEdit";
import Header from "../components/Header";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route path="" element={<Main />} />
						<Route path="detail" element={<Detail />} />
						<Route path="movieadmin" element={<MovieAdmin />} />
						<Route path="movie/:id" element={<MovieEdit />} />
					</Route>
					<Route path="/join" element={<Join />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
