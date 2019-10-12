import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BooksList from './BooksList';
import * as BooksAPI from '../BooksAPI';

class SearchPage extends Component {
	state = { result: [] };

	resetState = () => {
		this.setState({ result: [] });
	};

	handleChange = async (event) => {
		const searchTerm = event.target.value;
		if (searchTerm.length === 0) {
			this.resetState();
			return;
		}
		let result = await BooksAPI.search(searchTerm);
		if (result.error && result.error === 'empty query') {
			this.resetState();
			return;
		}
		result = result.filter((book) => book.authors !== undefined && book.imageLinks !== undefined);

		this.setState({ result });
	};
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => this.props.history.push('/')}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
					</div>
				</div>
				<div className="search-books-results">
					<BooksList
						result={this.state.result}
						books={this.props.books}
						updateShelf={this.props.updateShelf}
					/>
				</div>
			</div>
		);
	}
}

export default withRouter(SearchPage);
