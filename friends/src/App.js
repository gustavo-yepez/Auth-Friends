import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <Router>
			<div>
				<Link to="/login">Login</Link>
				<Link to="/friends">Friends</Link>
				<Switch>
					<PrivateRoute exact path="/friends" component={Friends} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Router>
  );
}

export default App;

{/* <div className="App">
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
    </div> */}