import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../Components/MovieCard';
import Navbar from '../Components/Navbar'
import { Row } from "react-bootstrap";

const Favorites = () => {
    const { favourite } = useSelector((state) => state.movies);

    return (
        <>
            <div className="bg-dark" >
                <Navbar />
            </div>
            <div className="container-fluid bg-dark">
				<Row md={4}>
                {favourite && favourite.map((movie) => <MovieCard movie={movie} />)}
				</Row>
			</div>
        </>

    );
};

export default Favorites;