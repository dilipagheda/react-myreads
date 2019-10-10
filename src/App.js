import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import BookShelf from './components/BookShelf';

class BooksApp extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										<li>
											<div className="book">
												<div className="book-top">
													<div
														className="book-cover"
														style={{
															width: 128,
															height: 193,
															backgroundImage:
																'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
														}}
													/>
													<div className="book-shelf-changer">
														<select>
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
												<div className="book-title">To Kill a Mockingbird</div>
												<div className="book-authors">Harper Lee</div>
											</div>
										</li>
										<li>
											<div className="book">
												<div className="book-top">
													<div
														className="book-cover"
														style={{
															width: 128,
															height: 188,
															backgroundImage:
																'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")'
														}}
													/>
													<div className="book-shelf-changer">
														<select>
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
												<div className="book-title">Ender's Game</div>
												<div className="book-authors">Orson Scott Card</div>
											</div>
										</li>
									</ol>
								</div>
							</div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Want to Read</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										<li>
											<div className="book">
												<div className="book-top">
													<div
														className="book-cover"
														style={{
															width: 128,
															height: 193,
															backgroundImage:
																'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")'
														}}
													/>
													<div className="book-shelf-changer">
														<select>
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
												<div className="book-title">1776</div>
												<div className="book-authors">David McCullough</div>
											</div>
										</li>
										<li>
											<div className="book">
												<div className="book-top">
													<div
														className="book-cover"
														style={{
															width: 128,
															height: 192,
															backgroundImage:
																'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")'
														}}
													/>
													<div className="book-shelf-changer">
														<select>
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
												<div className="book-title">Harry Potter and the Sorcerer's Stone</div>
												<div className="book-authors">J.K. Rowling</div>
											</div>
										</li>
									</ol>
								</div>
							</div>
							<BookShelf />
						</div>
					</div>
					<div className="open-search">
						<button onClick={() => {}}>Add a book</button>
					</div>
				</div>
				)}
			</div>
		);
	}
}

export default BooksApp;
