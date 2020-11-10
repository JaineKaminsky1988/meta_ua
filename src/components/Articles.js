import React, { Component } from 'react';
import News from './News';
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

class Articles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: true,
			news: [
				{
					dateStream: "",
					image: img2,
					liga: "Премьер лига Англии",
					time: "15:45",
					date: "Вчера",
					head: "Отбор к Евро-2019 (U-21). Украина - Андорра. Анонс и прогноз матча квалификации",
					description: "После победы над сборной Латвии (3:2) подопечные Александра Головко не имеют права терять очки в поединке…",
					commentCount: "1"
				},
				{
					dateStream: "Вчера, 11 сентября 2018, среда",
					image: img3,
					liga: "Премьер лига Англии",
					time: "15:45",
					date: "Вчера",
					head: "Отбор к Евро-2019 (U-21). Украина - Андорра. Анонс и прогноз матча квалификации",
					description: "После победы над сборной Латвии (3:2) подопечные Александра Головко не имеют права терять очки в поединке…",
					commentCount: "1"
					
				}
			]
		}
	}
	
	render() {
		return (
			<div className="articles">
				{
					this.state.news.map((news, idx) => {
						return (
							<News
								image={ news.image }
								liga={ news.liga }
								time={ news.time }
								date={ news.date }
								head={ news.head }
								description={ news.description }
								comment={ this.state.comment }
								commentCount={ news.commentCount }
								stroke="#076EE7"
							>
								
									{
										news.dateStream.length > 0 && <div className="date_stream">
									{ news.dateStream }
								</div>
									}
							</News>
						)
					})
				}
				<div className="more">
					Загрузить еще
				</div>
			</div>
		);
	}
}

export default Articles;