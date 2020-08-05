import React from 'react';

class Discover extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: []
		};
	}

	render() {
		console.log('Discover');
		return <div>Discover</div>;
	}
}

export default Discover;
