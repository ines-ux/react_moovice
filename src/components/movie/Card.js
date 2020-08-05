import React from 'react';

class Card extends React.Component {
	render() {
		const { image, title, description } = this.props;
		let url = `https://image.tmdb.org/t/p/w300${image}`;
		return (
			<div>
				<img src={url} alt="" />
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		);
	}
}

export default Card;
