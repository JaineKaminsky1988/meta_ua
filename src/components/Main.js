import React from 'react';
import BigSlider from './BigSlider';
import Articles from './Articles';
import Container from "./Container";
import Pagination from "./Pagination";

function Main() {
	
	return (
		<div
			className="main"
			onResize={ function (e) {
				console.log(e.target)
			} }
		>
			<BigSlider></BigSlider>
			<Articles></Articles>
      <Pagination></Pagination>
		</div>
	)
}

export default Main;