import React, { Component } from 'react';
import BookCover from './BookCover';

class Book extends Component {
	getAuthors = (authors) => {
		return authors.join(',');
	};

	handleOnChange = (event) => {
		this.props.updateShelf(this.props.bookId, event.target.value);
	};

	render() {
		return (
			<div className="book">
				<div className="book-top">
					<BookCover key={this.props.bookId} backgroundImage={this.props.backgroundImage} />
					<div className="book-shelf-changer">
						<select value={this.props.shelf} onChange={this.handleOnChange}>
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
				<div className="book-title">{this.props.title}</div>
				<div className="book-authors">{this.getAuthors(this.props.authors)}</div>
			</div>
		);
	}
}

export default Book;
