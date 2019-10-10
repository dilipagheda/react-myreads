import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { withRouter } from 'react-router-dom';

class MainPage extends Component {
	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf />
						<BookShelf />
						<BookShelf />
					</div>
				</div>
				<div className="open-search">
					{/* <Link to="/search">
						<button>Add a book</button>
					</Link> */}
					<button onClick={() => this.props.history.push('/search')}>Add a book</button>
				</div>
			</div>
		);
	}
}

export default withRouter(MainPage);
