import React, { Component } from 'react';
import Book from './Book';
import { ShelfDetails } from '../helper/ShelfDetails';

class BooksList extends Component {
	renderBooks = () => {
		return this.props.books.map((book) => {
			return (
				<li>
					<Book key={book.id} book={book} updateShelf={this.props.updateShelf} />
				</li>
			);
		});
	};

	renderSearchedBooks = () => {
		if (this.props.result.length === 0) return null;
		return this.props.result.map((searchedBook) => {
			const bookOnShelf = this.props.books.find((book) => book.id === searchedBook.id);
			if (bookOnShelf) {
				searchedBook.shelf = bookOnShelf.shelf;
			} else {
				searchedBook.shelf = ShelfDetails.none.id;
			}

			return (
				<li>
					<Book key={searchedBook.id} book={searchedBook} updateShelf={this.props.updateShelf} />
				</li>
			);
		});
	};

	render() {
		return (
			<ol className="books-grid">
				{
					this.props.result ? this.renderSearchedBooks() :
					this.renderBooks()}
			</ol>
		);
	}
}

export default BooksList;
