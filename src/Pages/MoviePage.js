import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../Components/Navbar";
function MoviePage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=a00ba3219f26860b2e210388c45e126a`)
            .then((res) => {
                setMovie(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                alert(err);
            });


    }, [movieId]);

    return (
        <div className="bg-dark contianer "  style={{height:948}}>
            <NavBar />
            <div className="container-fluid p-5 d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-6 " style={{ paddingLeft: 350 }}>
                        <img
                            src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
                            alt="poster"

                        />
                    </div>
                     <div className="col-md-6 text-light ">
                        <h1 className="text-warning">{movie.title}</h1>
                        <br></br>
                        <h4 className="text-light">{movie.tagline}</h4>
                        <br></br>

                        <h5 className="text-warning font-normal">  Rate :
                            <span className="text-light"> ⭐{movie.vote_average}/10</span>
                        </h5>
                        <br></br>

                        <h5 className="text-light font-normal">  Status :
                            <span className="text-light"> {movie.status}</span>
                        </h5>
                        <h5 className="text-warning">  Language :
                            <span > {movie.original_language}</span>
                        </h5>
                        <br></br>

                        <h5 className="text-light font-normal">  Release Date :-
                            <span className="text-light font-normal">{movie.release_date}</span>
                        </h5>
                        <br></br>

                        <h3 className="text-warning">OverView</h3>
                        <h5>
                            {movie.overview}
                        </h5>
                    </div>
                </div>



            </div>


        </div>
    );
}

export default MoviePage;
