import React, { useState, useEffect } from "react"

const MovieFormContainer = (props) => {
  const [movie, setMovie] = useState("")
  const [rating, setRating] = useState(null)

  const changeForm = (event) => {
    event.preventDefault()
    setMovie({
      ...movie, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const changeRating = (event) => {
    setRating(event.currentTarget.value)
    console.log(rating)
  }

  const formSubmit = () => {
    event.preventDefault()

    const movieData = { movie, rating }

    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(movieData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(console.log("You're about to see an error. Don't worry about it."))
  }

  return (
    <div className="panel">
      <form onSubmit={formSubmit}>
        <h3>Submit Movie</h3>

        <p>Title:</p>
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={changeForm}
        />

        <p>Enjoyment rating:</p>
        <p>
          <input type="radio" name="user-rating" value={1} onClick={changeRating}/>&nbsp;&nbsp;1&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={2} onClick={changeRating}/>&nbsp;&nbsp;2&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={3} onClick={changeRating}/>&nbsp;&nbsp;3&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={4} onClick={changeRating}/>&nbsp;&nbsp;4&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={5} onClick={changeRating}/>&nbsp;&nbsp;5
        </p>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MovieFormContainer
