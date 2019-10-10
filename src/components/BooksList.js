import React, { Component } from 'react';
import Book from './Book';

class BooksList extends Component {
	render() {
		return (
			<ol className="books-grid">
				<li>
					<Book />
				</li>
				<li>
					<Book />
				</li>
				<li>
					<Book />
				</li>
			</ol>
		);
	}
}

export default BooksList;
