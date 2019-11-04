import React, { useState, useEffect } from "react"

const MovieFormContainer = (props) => {
  const [movie, setMovie] = useState("")
  const [error, setError] = useState("")

  const changeForm = (event) => {
    event.preventDefault()
    setMovie(event.currentTarget.value)
    console.log(movie)
  }

  // const changeRating = (event) => {
  //   setRating(event.currentTarget.value)
  // }
  //
  // const changeReview = (event) => {
  //   event.preventDefault()
  //   setReview({
  //     ...review, [event.currentTarget.id]: event.currentTarget.value
  //   })
  // }

  const formSubmit = () => {
    event.preventDefault()
    setError("")

    if (movie.length) {
      fetch("/api/v1/movies.json", {
        credentials: "same-origin",
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        }
      })
      .then(response => {
        if (response.status == 500) {
          setError("We couldn't find that movie :(")
        } else {
          window.location = "/"
          // console.log(response)
        }
      })
    } else {
      setError("Title field can't be blank")
    }
  }

  return (
    <div className="panel">
      <div className="error">{error}</div>

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

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MovieFormContainer
