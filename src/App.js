import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
	render() {
		return (
			<Router>
				<div className="app">
					<Route exact path="/" component={MainPage} />
					<Route path="/search" component={SearchPage} />
				</div>
			</Router>
		);
	}
}

export default BooksApp;
