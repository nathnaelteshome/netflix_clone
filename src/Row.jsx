import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  // A snippet of code which runs based on a specific conditions/variable
  useEffect(() => {

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchUrl])
  // console.log(movies)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    console.log("movie", movie)
    console.log("trailer", trailerUrl)
    if (trailerUrl) {
      setTrailerUrl('');
    }
    else {
      movieTrailer(movie?.original_title || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log("url,", urlParams.get("v"))
          setTrailerUrl(urlParams.get("v"))

        }).catch((error) => console.log(error))
    }
  }

  return (
    <div className="row">
      <h2> {title}</h2>
      <div className="row__posters">
        {/* sevreal row-posters */}
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            key={movie.id}
            alt={movie.original_title} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}


export default Row