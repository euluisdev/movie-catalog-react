import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp, 
    BsWallet2, 
    BsHourglassSplit, 
    BsFillFileEarmarkTextFill
} from 'react-icons/bs';

import MovieCard from "../components/MovieCard";

const moviesURL = import.meta.env.VITE_API  // import variable of the .env
const apiKey = import.meta.env.VITE_API_KEY  // import variable of the .env

const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    }

    return (
        <div>
            <h2>Movie</h2>
        </div>
    )
}

export default Movie;