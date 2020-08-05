import React from 'react';
import Card from './movie/Card';

class PopularBattle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 1,
			movies: []
		};
	}

	componentDidMount() {
		let API_KEY = '74e7d2a525818dc6d851a13d76d92d3c';
		let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
		fetch(url).then((res) => res.json()).then((json) => {
			// console.log(' Popular, vérifier le contenu de json', json);
			this.setState({
				movies: json.results
			});
		});
	}

	onClickMovie(movieId) {
		this.setState({
			currentPage: this.state.currentPage + 1
		});
	}

	render() {
		// console.log('popularBattle afficher le state movies', this.state.movies);
		let currentMovies = [];
		let movieOne = this.state.movies[(this.state.currentPage - 1) * 2];
		let movieTwo = this.state.movies[(this.state.currentPage - 1) * 2 + 1];
		currentMovies.push(movieOne, movieTwo);
		// console.log('popularBattle currentMovies', currentMovies);

		if (this.state.movies.length == 0) {
			return (
				<div className="container">
					<h3>Lodding.....</h3>
				</div>
			);
		}

		if (this.state.currentPage > this.state.movies.length / 2) {
			return (
				<div className="container">
					<h3>No movies remaining!</h3>
				</div>
			);
		}

		return (
			<div className="container">
				<div className="row">
					{currentMovies.map((movie) => {
						// console.log('map movie : ', movie);
						return (
							<div className="col-6" onClick={() => this.onClickMovie(movie.id)}>
								<Card image={movie.poster_path} title={movie.title} description={movie.overview} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default PopularBattle;
