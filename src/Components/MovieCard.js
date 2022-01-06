import { Link } from "react-router-dom";
function MovieCard({ movie }) {
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

        </div>
    );
}

export default MovieCard;