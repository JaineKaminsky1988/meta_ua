import React, { Component } from 'react';
import Slider from "react-slick";
import Icons from "./Icons";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import img from "../images/img1.jpg"
import News from "./News";

export default class BigSlider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: true,
			slides: [
				{
					image: img,
					liga: "Премьер лига Англии",
					time: "20:45",
					date: "12 декабря 2019",
					head: "Модрич: Если Хорватия продолжит так играть, у нас будут большие проблемы с попаданием на Евро",
					description: "Обладатель Золотого мяча не помог вице-чемпиону мира обыграть скромную Венгрию",
					commentCount: "183"
				},
				{
					image: img,
					liga: "Премьер лига Англии",
					time: "20:45",
					date: "12 декабря 2019",
					head: "Модрич: Если Хорватия продолжит так играть, у нас будут большие проблемы с попаданием на Евро",
					description: "Обладатель Золотого мяча не помог вице-чемпиону мира обыграть скромную Венгрию",
					commentCount: "183"
				}
			]
		}
	}
	
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <NextArrow
				id="arrow_right"
				width="8"
				height="11"
				color="#fff"
			/>,
			prevArrow: <PrevArrow
				id="arrow_left"
				width="8"
				height="11"
				color="#fff"
			/>,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1,
						infinite: true,
						dots: true
					}
				}
			]
		};
		return (
			<div className="bigSlider_block">
				<Slider { ...settings }>
					{
						this.state.slides.map((slide, idx) => {
							return (
								<News
									image={ slide.image }
									liga={ slide.liga }
									time={ slide.time }
									date={ slide.date }
									head={ slide.head }
									description={ slide.description }
									comment={ this.state.comment }
									commentCount={ slide.commentCount }
									stroke="#fff"
								/>
							)
						})
					}
				</Slider>
			</div>
		);
	}
}