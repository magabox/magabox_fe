<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
=======
import Router from "./shared/Router";
import GlobalStyles from "./GlobalStyle";

function App() {
	return (
		<>
			<GlobalStyles />
			<Router />
		</>
	);
>>>>>>> 11be5e89c3bf4bc7f72a676272bfa75893780c21
}

export default App;
