import axios from "axios";
import { Row } from "react-bootstrap";
import { useState, useEffect ,useContext } from "react";
import NavBar from "../Components/Navbar";
import {languageContext} from "../contexts/languageContext"
import MovieCard from "../Components/MovieCard";
function Movies() {
	const [movies, setMovies] = useState([])
	const [pageNo, setPageNo] = useState(1);
	const { contextLang, setContextLang } = useContext(languageContext);

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
			<h1 className='text-warning'>{contextLang === "en" ? "Movies" : "الأفلام"}</h1>

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