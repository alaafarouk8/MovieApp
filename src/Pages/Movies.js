import axios from "axios";
import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import NavBar from "../Components/Navbar";
import MovieCard from "../Components/MovieCard";
function Movies() {
	const [movies, setMovies] = useState([])
	const [pageNo, setPageNo] = useState(1);

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=a00ba3219f26860b2e210388c45e126a&page=${pageNo}`, {
		})
			.then((res) => {
				setMovies(res.data.results);
			})
			.catch((err) => {
				alert(err);
			});
	}, [pageNo]);
	return (
		<div className="bg-dark contianer" >
			<NavBar />
			<div className="container-fluid d-flex justify-content-center">
				<Row md={4}>
					{movies.map((movie) => (
						<MovieCard movie={movie} />
					))}
				</Row>
			</div>
		</div>

	);
}
export default Movies;