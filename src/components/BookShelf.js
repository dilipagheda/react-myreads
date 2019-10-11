import React, { Component } from 'react';
import BooksList from './BooksList';

class BookShelf extends Component {
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<BooksList books={this.props.books} updateShelf={this.props.updateShelf} />
				</div>
			</div>
		);
	}
}

export default BookShelf;
