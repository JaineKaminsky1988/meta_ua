import React from 'react';
import Icons from "./Icons";

function News(props) {
	return (
		<>
			{ props.children }
			<div className={ `news ${ props.image ? "news_image" : "" }` }>
				{
					props.image && <img
						src={ props.image }
						alt=""
					/>
				}
				<div className="news_content">
						<div className="news_source">
							<div className="liga">{ props.liga }</div>
							<div className="date">
								{
									props.date && <span>{ props.date },</span>
								}
								<span>{ props.time }</span>
							</div>
						</div>
						<div className="news_head">
							<span>{ props.head }</span>
							{
								props.comment && <span className="comment">
									<Icons
										id="speach_bubble"
										width="11"
										height="11"
										stroke={ props.stroke }
									/>
									<span className="comment_count">{ props.commentCount }</span>
								</span>
							}
						</div>
					{
						props.description && <div className="news_description">
							{ props.description }
						</div>
					}
				</div>
			</div>
			</>
	);
}

export default News;