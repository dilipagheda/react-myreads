import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
	renderBooks = () => {
		return this.props.books.map((book) => (
			<li>
				<Book
					key={book.id}
					bookId={book.id}
					shelf={book.shelf}
					backgroundImage={book.imageLinks.thumbnail}
					title={book.title}
					authors={book.authors}
					updateShelf={this.props.updateShelf}
				/>
			</li>
		));
	};

	render() {
		return <ol className="books-grid">{this.renderBooks()}</ol>;
	}
}

export default BooksList;
