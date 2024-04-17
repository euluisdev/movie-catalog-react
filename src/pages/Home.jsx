import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API  // import variable of the .env
const apiKey = import.meta.env.VITE_API_KEY  // import variable of the .env

const Home = () => {
    console.log(moviesURL, apiKey);

    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

export default Home;