import React from 'react';

const BookCover = (props) => {
	console.log('Bookcover');
	return (
		<div
			className="book-cover"
			style={{
				width: 128,
				height: 192,
				backgroundImage: `url("${props.backgroundImage}")`
			}}
		/>
	);
};

export default BookCover;
