import React from 'react';
import IconsSVG from './sprite.svg';

function Icons({id, color, stroke, width, height}) {
	
	return (
		<svg
			className={ id }
			fill={ color }
			stroke={ stroke }
			width={ width }
			height={ height }
			viewBox={ `0 0 ${ width } ${ height }` }
		>
            <use xlinkHref={ `${ IconsSVG }#${ id }` } />
        </svg>
	)
}

export default Icons;