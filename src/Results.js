import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState(["1", "2", "3"]);
  useEffect(() => {
    //Run piece of code each time component mount to the DOM
    //Empty [] means it is going to run only once
    async function fetchData() {
      const response = await axios.get(selectedOption);
      setMovies(response.data.results);
    }
    fetchData();
  }, [selectedOption]);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
