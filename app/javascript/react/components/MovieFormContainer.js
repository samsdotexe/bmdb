import React, { useState, useEffect } from "react"

const MovieFormContainer = (props) => {
  const [movie, setMovie] = useState("")
  const [rating, setRating] = useState(null)
  const [review, setReview] = useState("")

  const changeForm = (event) => {
    event.preventDefault()
    setMovie({
      ...movie, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const changeRating = (event) => {
    setRating(event.currentTarget.value)
  }

  const changeReview = (event) => {
    event.preventDefault()
    setReview({
      ...review, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const formSubmit = () => {
    event.preventDefault()

    const movieData = { movie, rating, review }

    fetch("/api/v1/movies.json", {
      credentials: "same-origin",
      method: "POST",
      body: JSON.stringify(movieData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    .then(response => {
      console.log(response)
    })
    // window.location = "/"
  }

  return (
    <div className="panel">
      <form onSubmit={formSubmit}>
        <h3>Submit Movie</h3>
        <hr width="100%"/>

        <p>Title:</p>
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={changeForm}
        />

        <p>Enjoyment rating:</p>
        <p>
          <input type="radio" name="user-rating" value={1} onClick={changeRating}/>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={2} onClick={changeRating}/>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={3} onClick={changeRating}/>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={4} onClick={changeRating}/>&nbsp;&nbsp;&nbsp;
          <input type="radio" name="user-rating" value={5} onClick={changeRating}/>
        </p>

        <p>Review:</p>
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={changeReview}
        />

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MovieFormContainer
