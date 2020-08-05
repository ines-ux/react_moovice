import React from 'react';
import Card from './movie/Card';

class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: []
		};
	}

	componentDidMount() {
		let API_KEY = '74e7d2a525818dc6d851a13d76d92d3c';
		let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
		fetch(url).then((res) => res.json()).then((json) => {
			// console.log(' Popular, vérifier le contenu de json', json);
			// console.log(' Popular, vérifier le contenu de json results', json.results);
			this.setState({
				movies: json.results // on met un point entre json et results pour utiliser le contenu de result qui est une clé de l'objet json.
			});
		});
	}

	render() {
		console.log('popular afficher le state movies', this.state.movies);
		return (
			<div className="container">
				<div className="row">
					{this.state.movies.map((movie) => {
						return (
							<div className="col-3">
								<Card image={movie.poster_path} title={movie.title} description={movie.overview} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Popular;
