import React from 'react';
import Icons from './Icons';

function Pagination(props) {
	return (
		<div className="pagination">
			<div className="prev">
					<Icons
						id="arrow_left"
						width="7"
						height="11"
						color="#9a9caf"
					/>
			</div>
			<div className="pages">
				<button className="active">1</button>
				<button>2</button>
				<button>3</button>
				<div>
					<Icons
						id="ellipsis"
						width="8"
						height="2"
						color="#9a9caf"
					/>
				</div>
				<button>109</button>
				<button>110</button>
				<button>111</button>
			</div>
			<div className="next">
					<Icons
						id="arrow_right"
						width="7"
						height="11"
						color="#9a9caf"
					/>
			</div>
		</div>
	);
}

export default Pagination;