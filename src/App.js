import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyle";
import Layout from "./elem/Layout/Layout";


function App() {
	return (
		<>
			<Layout/>
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;
