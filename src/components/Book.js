import React, { Component } from 'react';
import BookCover from './BookCover';

class Book extends Component {
	getAuthors = (authors) => {
		return authors && authors.join(',');
	};

	handleOnChange = (event, book) => {
		this.props.updateShelf(book, event.target.value);
	};

	render() {
		const { book } = this.props;
		return (
			<div className="book">
				<div className="book-top">
					<BookCover key={book.bookId} backgroundImage={book.imageLinks.thumbnail} />
					<div className="book-shelf-changer">
						<select value={book.shelf} onChange={(event) => this.handleOnChange(event, book)}>
							<option value="move" disabled>
								Move to...
							</option>
							<option value="currentlyReading">Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</select>
					</div>
				</div>
				<div className="book-title">{book.title}</div>
				<div className="book-authors">{this.getAuthors(book.authors)}</div>
			</div>
		);
	}
}

export default Book;
