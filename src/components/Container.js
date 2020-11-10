import React from 'react';
import Main from './Main'
import Side from './Side'

function Container(props) {
	return (
		<div className="container">
			<Main></Main>
			<Side></Side>
		</div>
	);
}

export default Container;