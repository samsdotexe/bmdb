import React, { useState, useEffect } from "react"

import MovieShow from "./MovieShow"

const MovieShowContainer = (props) => {
  const [movie, setMovie] = useState([])

  const movieId = props.match.params.id
  const fetchMovie = `/api/v1/movies/${movieId}`

  useEffect(() => {
    fetch(fetchMovie)
      .then((response) => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage)
          throw(error)
        }
      })
      .then(response => response.json())
      .then(fetchedMovie => {
        setMovie(fetchedMovie)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    },[])

  return (
    <div className="panel">
      <MovieShow
        title={movie.title}
        plot={movie.plot}
        poster={movie.poster}
      />
    </div>
  )
}

export default MovieShowContainer
