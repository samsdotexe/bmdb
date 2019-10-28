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

  // useEffect(() => {
  //   setMovies("meeeeee")
  // }, [])

  console.log(movies)

  return (
    <div>
    </div>
  )
}

export default MoviesIndexContainer
