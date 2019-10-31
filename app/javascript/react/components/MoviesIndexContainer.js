import React, { useState, useEffect } from "react"

import MovieTile from "./MovieTile"

const MoviesIndexContainer = (props) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(`/api/v1/movies`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
        throw error
      }
    })
    .then((parsedMovies) => {
      setMovies(parsedMovies)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const movieTiles = movies.map(movie => {
    return (
      <MovieTile
        key={movie.id}
        id={movie.id}
        title={movie.title}
        poster={movie.poster}
      />
    )
  })

  return (
    <div className="index-panel">
      <center>
        <h1>The Bad Movie Database</h1>
        <p>A place for cataloging and ranking bad movies.</p>
        <a href="/movies/new">Submit a Movie</a>

        <center className="grid-x">
          {movieTiles}
        </center>
      </center>
    </div>
  )
}

export default MoviesIndexContainer
