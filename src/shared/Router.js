import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/Main/Main";
import Join from "../pages/Join/Join";
import Detail from "../pages/Detail/Detail";
import MovieAdmin from "../pages/MovieAdmin/MovieAdmin";
import Header from "../components/Header";
import { Outlet } from "react-router-dom/dist";
const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />}>
						{/* <Route path="" element={<Main />} /> */}
						<Route path="join" element={<Join />} />
						<Route path="detail" element={<Detail />} />
						<Route path="movieadmin" element={<MovieAdmin />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
};


const Head = () =>{
	<>
	<Header/>
	<Outlet></Outlet>
	</>
}
export default Router;
