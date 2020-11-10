import React from 'react';
import Icons from "./Icons";

function NextArrow(props) {
	const {className, style, onClick} = props;
	return (
		<div
			className={ className }
			style={ {...style} }
			onClick={ onClick }
		>
			<Icons
				id={ props.id }
				width={ props.width }
				height={ props.height }
				color={ props.color }
			/>
		</div>
	);
}

export default NextArrow;