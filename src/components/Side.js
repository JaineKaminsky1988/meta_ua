import React, { PureComponent } from 'react';
import img4 from "../images/img4.png";
import News from "./News";

class Side extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			comment: true,
			footbalNews: [
				{
					image: img4,
					liga: "Золотой мяч",
					time: "20:45",
					head: "Кардифф Сити не будет перечислять Нанту всю сумму за трансфер погибшего Сала",
					commentCount: "3 009"
				},
				{
					liga: "Бундеслига",
					time: "21:50",
					head: "Наше класико, наша женская судейская бригада, ФК Карпаты остались без всех своих фанатов",
					commentCount: "4 349"
					
				},
				{
					liga: "Евро 2020",
					time: "21:50",
					head: "Наше класико, наша женская судейская бригада, Черноморец остался без фанатов",
					commentCount: "534"
					
				},
				{
					liga: "Лига Чемпионов",
					time: "21:50",
					head: "Карпаты разгромили Тернополь Ниву во Львове 7:0",
					commentCount: "3 009"
					
				},
				{
					liga: "Бундеслига",
					time: "21:50",
					head: "Наше класико, наша женская судейская бригада, Черноморец остался без фанатов",
					commentCount: "4 349"
					
				}
			]
		}
	}
	
	render() {
		return (
			<div className="side">
				<div>
					<h2>Новости футбола</h2>
					<div className="footbal_news">
					{
						this.state.footbalNews.map((footbalNews, idx) => {
							return (
								<News
									image={ footbalNews.image }
									liga={ footbalNews.liga }
									time={ footbalNews.time }
									head={ footbalNews.head }
									comment={ this.state.comment }
									commentCount={ footbalNews.commentCount }
									stroke="#076EE7"
								>
								</News>
							)
						})
					}
					</div>
					<div className="all_news">
						<a href="#">Все новости</a>
					</div>
				</div>
      </div>
		);
	}
}

export default Side;