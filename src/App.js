import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import { ShelfDetails } from './helper/ShelfDetails';

import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
	}

	updateShelf = async (bookId, shelf) => {
		const response = await BooksAPI.update({ id: bookId }, shelf);
		console.log(response);

		this.setState((prevState) => {
			let books = prevState.books.map((book) => {
				if (response.currentlyReading.includes(book.id)) {
					book.shelf = ShelfDetails.currentlyReading.id;
				} else if (response.read.includes(book.id)) {
					book.shelf = ShelfDetails.read.id;
				} else if (response.wantToRead.includes(book.id)) {
					book.shelf = ShelfDetails.wantToRead.id;
				} else {
					book.shelf = ShelfDetails.none.id;
				}
				return book;
			});
			books = books.filter((book) => book.shelf !== ShelfDetails.none.id);
			return {
				books
			};
		});
	};

	async componentDidMount() {
		const books = await BooksAPI.getAll();
		this.setState({ books });
		console.log(books);
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Route
						exact
						path="/"
						render={() => <MainPage books={this.state.books} updateShelf={this.updateShelf} />}
					/>
					<Route path="/search" component={SearchPage} />
				</div>
			</Router>
		);
	}
}

export default BooksApp;
