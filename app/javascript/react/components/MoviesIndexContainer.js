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
        name={movie.title}
        plot={movie.plot}
        poster={movie.poster}
      />
    )
  })

  return (
    <div>
      {movieTiles}
    </div>
  )
}

export default MoviesIndexContainer
