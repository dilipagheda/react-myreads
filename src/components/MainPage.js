import React, { Component } from 'react';
import BookShelf from './BookShelf';
import { ShelfDetails } from '../helper/ShelfDetails';
import { withRouter } from 'react-router-dom';

class MainPage extends Component {
	getBooksByShelfTitle = (shelfTitle) => {
		return this.props.books.filter((book) => book.shelf === shelfTitle);
	};

	render() {
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							title={ShelfDetails.currentlyReading.title}
							books={this.getBooksByShelfTitle(ShelfDetails.currentlyReading.id)}
							updateShelf={this.props.updateShelf}
						/>
						<BookShelf
							title={ShelfDetails.wantToRead.title}
							books={this.getBooksByShelfTitle(ShelfDetails.wantToRead.id)}
							updateShelf={this.props.updateShelf}
						/>
						<BookShelf
							title={ShelfDetails.read.title}
							books={this.getBooksByShelfTitle(ShelfDetails.read.id)}
							updateShelf={this.props.updateShelf}
						/>
					</div>
				</div>
				<div className="open-search">
					<button onClick={() => this.props.history.push('/search')}>Add a book</button>
				</div>
			</div>
		);
	}
}

export default withRouter(MainPage);
