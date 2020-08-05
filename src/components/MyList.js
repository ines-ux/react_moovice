import React from 'react';
class MyList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			movieIds: this.getFromLocalStorage()
		};
	}
	render() {
		return <div>MyList</div>;
	}
}
export default MyList;
