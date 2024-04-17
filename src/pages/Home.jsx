import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API  // import variable of the .env
const apiKey = import.meta.env.VITE_API_KEY  // import variable of the .env

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

        getTopRatedMovies(topRatedUrl);
    }, [])

    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default Home;