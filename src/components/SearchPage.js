import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BooksList from './BooksList';
import * as BooksAPI from '../BooksAPI';
import * as _ from 'underscore';

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = { result: [], searchTerm: '', error: '' };
		this.getDataThrottled = _.throttle(this.getData, 150);
		this.getDataDebounced = _.debounce(this.getData, 200);
	}
	resetState = () => {
		this.setState({ result: [], searchTerm: '' });
	};

	getData = async (searchTerm) => {
		if (searchTerm.length === 0) {
			this.resetState();
			return;
		}
		let result = await BooksAPI.search(searchTerm);
		if (result.error && result.error === 'empty query') {
			this.setState({ result: [], error: 'Sorry! No results are found!!' });
			return;
		}
		result = result.filter((book) => book.authors !== undefined && book.imageLinks !== undefined);
		if (this.state.searchTerm.length > 0) {
			this.setState({ result, error: '' });
		} else {
			this.resetState();
		}
	};

	handleChange = async (event) => {
		if (!event.target) return;
		const searchTerm = event.target.value;
		this.setState({ searchTerm });
		await this.getDataThrottled(searchTerm);
		await this.getDataDebounced(searchTerm);
	};
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => this.props.history.push('/')}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<input
							value={this.state.searchTerm}
							type="text"
							placeholder="Search by title or author"
							onChange={this.handleChange}
						/>
					</div>
				</div>
				<div className="search-books-results">
					{
						this.state.searchTerm.length > 0 ? this.state.error.length > 0 ? <p>{this.state.error}</p> :
						<BooksList
							result={this.state.result}
							books={this.props.books}
							updateShelf={this.props.updateShelf}
						/> :
						null}
				</div>
			</div>
		);
	}
}

export default withRouter(SearchPage);
