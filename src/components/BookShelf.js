import React, { Component } from 'react';
import BooksList from './BooksList';

class BookShelf extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Read</h2>
				<div className="bookshelf-books">
					<BooksList />
				</div>
			</div>
		);
	}
}

export default BookShelf;
