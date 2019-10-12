import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import SearchPage from './components/SearchPage';
import { ShelfDetails } from './helper/ShelfDetails';
import NoMatch from './components/NoMatch';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { books: [] };
	}

	updateShelf = async (book, shelf) => {
		const bookId = book.id;
		const response = await BooksAPI.update({ id: bookId }, shelf);

		this.setState((prevState) => {
			let prevBooks = prevState.books;
			let shelfIds = [ ...response.currentlyReading, ...response.read, ...response.wantToRead ];
			shelfIds.forEach((shelfId) => {
				const pBook = prevBooks.find((prevBook) => {
					return prevBook.id === shelfId;
				});
				if (!pBook) {
					prevBooks.push(book);
				}
			});

			let books = prevBooks.map((book) => {
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
		let books = await BooksAPI.getAll();
		books = books.filter((book) => book.authors !== undefined && book.imageLinks !== undefined);
		this.setState({ books });
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Switch>
						<Route
							exact
							path="/"
							render={() => <MainPage books={this.state.books} updateShelf={this.updateShelf} />}
						/>
						<Route
							path="/search"
							render={() => <SearchPage books={this.state.books} updateShelf={this.updateShelf} />}
						/>
						<Route component={NoMatch} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default BooksApp;
