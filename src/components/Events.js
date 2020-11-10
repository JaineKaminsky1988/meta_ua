import React, { Component } from 'react';
import Slider from "react-slick";
import Icons from "./Icons";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

export default class Events extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [
				{
					date: "СЕГОДНЯ 12:00",
					period: "FT",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "4",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "0",
						},
					}
				},
				{
					date: "СЕГОДНЯ 12:00",
					period: "FT",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "4",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "0",
						},
					}
				},
				{
					date: "СЕГОДНЯ 12:00",
					period: "FT",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "4",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "0",
						},
					}
				},
				{
					date: "СЕГОДНЯ 12:00",
					period: "FT",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "0",
							subCount: "(5)",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "0",
							subCount: "(4)",
						},
					}
				},
				{
					date: "СЕГОДНЯ 12:00",
					period: "live",
					live: true,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "0",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "2",
						},
					}
				},
				{
					date: "21 НОЯБРЯ 12:00",
					period: " ",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "-",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "-",
						},
					}
				},
				{
					date: "СЕГОДНЯ 12:00",
					period: "FT",
					live: false,
					teams: {
						team1: {
							name: "Пари Сен-Жермен",
							emblem: "e1",
							count: "4",
						},
						team2: {
							name: "Барселона",
							emblem: "e2",
							count: "0",
						},
					}
				},
			]
		}
	}
	
	render() {
		const settings = {
				dots: false,
				infinite: true,
				speed: 500,
				slidesToShow: 6,
				slidesToScroll: 1,
				nextArrow: <NextArrow
					id="arrow_right"
					width="8"
					height="11"
					color="#9a9caf"
				/>,
				prevArrow: <PrevArrow
					id="arrow_left"
					width="8"
					height="11"
					color="#9a9caf"
				/>,
				responsive: [
					{
						breakpoint: 1100,
						settings: {
							slidesToShow: 4,
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 3,
							autoplay: true
						}
					},
					{
						breakpoint: 590,
						settings: {
							slidesToShow: 2,
							autoplay: true
						}
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 2,
							autoplay: true
						}
					},
					{
						breakpoint: 320,
						settings: {
							slidesToShow: 1,
							autoplay: true
						}
					}
				]
			}
		;
		return (
			<div className="events_block">
				<Slider { ...settings }>
					{ this.state.events.map((events, idx) => {
						return (
							<div key={ idx }>
								<div className={ `event ${ events.live ? "live" : "" }` }>
									
									<div className="left">
										<div className="date">{ events.date }</div>
										<div className="teams">
											<div className="team team1">
												<div className="emblem">
													<Icons
														id={ events.teams.team1.emblem }
														width='18'
														height='18'
													/>
												</div>
												<div className="name">{ events.teams.team1.name }</div>
											</div>
											<div className="team team2">
												<div className="emblem">
													<Icons
														id={ events.teams.team2.emblem }
														width='18'
														height='18'
													/>
												</div>
												<div className="name">{ events.teams.team2.name }</div>
											</div>
										</div>
									</div>
									
									<div className="right">
										<div className="period">{ events.period }</div>
										<div className="count count1">
											<span className="countValue">{ events.teams.team1.count } </span>
											{
												events.teams.team1.subCount &&
												<span className="subCountValue"> { events.teams.team1.subCount }</span>
											}
										</div>
										<div className="count count2">
											<span className="countValue">{ events.teams.team2.count }</span>
											{
												events.teams.team2.subCount &&
												<span className="subCountValue">{ events.teams.team2.subCount }</span>
											}
										</div>
									</div>
								</div>
							</div>
						)
					}) }
				</Slider>
			</div>
		);
	}
}