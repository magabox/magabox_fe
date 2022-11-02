import React from "react";
import Layout from "../../elem/Layout/Layout";
import MainAd from "./MainAd";
import Footer from "../../pages/Detail/Footer";
import Benefit from "./Benefit";
import Curation from "./Curation";
import MegaGuide from "./MegaGuide";
const Main = () => {
	return (
		<>
			<Layout />
			<Benefit />
			<Curation />
			<MegaGuide />
			<MainAd />
			<Footer />
		</>
	);
};

export default Main;
