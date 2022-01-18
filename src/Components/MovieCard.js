import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addFavouriteAction, RemoveFromFavouriteAction } from '../redux/actions';
function MovieCard({ movie }) {
    const { favourite } = useSelector((state) => state.movies);
	const dispatch = useDispatch();
    return (

        <div className="card bg-dark text-white mb-5">
            <Link to={`/movie/${movie.id}`} className="text-decoration-none">
            <div className="p-2 m-5">
                <img
                    className="card-img"
                    src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                    alt='poster'
                />
            </div>
                <div className="card-footer text-center text-light">
                    <h5   >{movie.title}</h5>
                    <p >⭐{movie.vote_average}/10</p>
                </div>
            </Link>
            <div className="card-body text-center">
            <button
					onClick={() =>
						dispatch(
							favourite.find((m) => m.id == movie.id)
								? RemoveFromFavouriteAction(movie.id)
								: addFavouriteAction(movie)
						)
					}
					className={`btn btn-` + (favourite.find((m) => m.id == movie.id) ? `danger` : `warning`)}
				>
					{favourite.find((m) => m.id == movie.id) ? `Remove From Favourite` : `Add To Favourite`}
				</button>
                </div>
        </div>
    );
}

export default MovieCard;