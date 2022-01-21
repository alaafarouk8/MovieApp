import React from 'react';
import { useSelector } from 'react-redux';
import { useState, useEffect ,useContext } from "react";

import MovieCard from '../Components/MovieCard';
import Navbar from '../Components/Navbar'
import { Row } from "react-bootstrap";
import {languageContext} from "../contexts/languageContext"

const Favorites = () => {
    const { favourite } = useSelector((state) => state.movies);
	const { contextLang, setContextLang } = useContext(languageContext);

    return (
        <>
           <div className='bg-dark'>
            <div className="bg-dark" >
                <Navbar />
            </div>
            <h1 className='text-warning bg-dark'>{contextLang === "en" ? "Favorite Movies" : "الافلام المفضلة"}</h1>

            <div className="container-fluid bg-dark">
				<Row md={4}>
                {favourite && favourite.map((movie) => <MovieCard movie={movie} />)}
				</Row>
			</div>
            </div>
        </>

    );
};

export default Favorites;