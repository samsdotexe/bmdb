import React, { useState, useEffect } from "react"

import MovieShow from "./MovieShow"
import ReviewIndexContainer from "./ReviewIndexContainer"

const MovieShowContainer = (props) => {
  const [movie, setMovie] = useState([])
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState("")
  const [error, setError] = useState("")
  const [reviews, setReviews] = useState([])


  const movieId = props.match.params.id
  const fetchMovie = `/api/v1/movies/${movieId}`

  const changeRating = (event) => {
    setRating(event.currentTarget.value)
    console.log(rating)
  }

  const changeReview = (event) => {
    setReview(event.currentTarget.value)
    console.log(review)
  }

  const reviewSubmit = () => {
    event.preventDefault()
    setError("")

    const reviewData = { rating, review }

    fetch(`${fetchMovie}/reviews.json`, {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      if (response.status == 500) {
        setError("Something went wrong")
      } else {
        window.location = `/movies/${movieId}`
      }
    })
  }

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
  }, [])

  useEffect(() => {
    fetch(`/api/v1/movies/${movieId}/reviews`)
    .then(response => response.json())
    .then(body => {
      setReviews(body)
    })
  }, [])

  var reviewsContainer = null

  if (reviews.length) {
    reviewsContainer =
    <ReviewIndexContainer
      reviews={reviews}
    />
  }

  return (
    <div className="show-panel">
      <MovieShow
        title={movie.title}
        year={movie.year}
        rated={movie.rated}
        released={movie.released}
        runtime={movie.runtime}
        genre={movie.genre}
        director={movie.director}
        plot={movie.plot}
        poster={movie.poster}
        user_rating={movie.user_rating}
        average_rating={movie.average_rating}
        reviews={movie.reviews}
        changeRating={changeRating}
        changeReview={changeReview}
        reviewSubmit={reviewSubmit}
        error={error}
      />
      {reviewsContainer}
    </div>
  )
}

export default MovieShowContainer
