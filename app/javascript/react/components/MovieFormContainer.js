import React, { useState, useEffect } from "react"

const MovieFormContainer = (props) => {
  const [movie, setMovie] = useState("")

  const changeForm = (event) => {
    event.preventDefault()
    setMovie({
      ...movie, [event.currentTarget.id]: event.currentTarget.value
    })
  }

  const formSubmit = () => {
    event.preventDefault()

    fetch("/api/v1/movies", {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    // .then(response => {
    //   if (!response.ok) {
    //     throw(Error("success"))
    //   }
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    .then(console.log("You're about to see an error. Don't worry about it."))
  }

  return (
    <div className="panel">
      <form onSubmit={formSubmit}>
        <h2>Submit Movie</h2>

        <p>Title</p>
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={changeForm}
        />

        <p>Rating</p>
        <p>
          <input type="radio" name="user-rating" value="one"/>1
          <input type="radio" name="user-rating" value="two"/>2
          <input type="radio" name="user-rating" value="three"/>3
          <input type="radio" name="user-rating" value="four"/>4
          <input type="radio" name="user-rating" value="five"/>5
        </p>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default MovieFormContainer
