import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';

import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
	}

	async componentDidMount() {
		const books = await BooksAPI.getAll();
		this.setState({ books });
		console.log(books);
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Route exact path="/" render={() => <MainPage books={this.state.books} />} />
					<Route path="/search" component={SearchPage} />
				</div>
			</Router>
		);
	}
}

export default BooksApp;
