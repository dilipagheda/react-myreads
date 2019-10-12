import React from 'react';

const BookCover = (props) => {
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
