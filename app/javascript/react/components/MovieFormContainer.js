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
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="rating">
          <h3>form</h3>
        </label>
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
