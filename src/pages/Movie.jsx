import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    bsGraphUp, 
    BaWallet2, 
    BsHourglassSplit, 
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API  // import variable of the .env
const apiKey = import.meta.env.VITE_API_KEY  // import variable of the .env

const Movie = () => {
    return (
        <div>
            <h2>Movie</h2>
        </div>
    )
}

export default Movie;