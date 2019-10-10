import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchPage extends Component {
	render() {
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<button className="close-search" onClick={() => this.props.history.push('/')}>
						Close
					</button>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid" />
				</div>
			</div>
		);
	}
}

export default withRouter(SearchPage);
