import React from "react"

import MovieShowRadio from "./MovieShowRadio"

const MovieShowReviewForm = (props) => {
  const oneThroughTen = [...Array(10).keys()].map(index => ++index)

  const radioTiles = oneThroughTen.map(num => {
    return (
      <MovieShowRadio
        key={num}
        value={num}
        changeRating={props.changeRating}
      />
    )
  })

  return (
    <div>
      <form onSubmit={props.reviewSubmit}>
        <hr width="100%"/>
        <div className="error">{props.error}</div>
        <h3>Rate this movie</h3>

        <p>Enjoyment rating:</p>
        <p>{radioTiles}</p>

        <p>Review:</p>
        <textarea
          name="body"
          id="body"
          type="text"
          onChange={props.changeReview}
        />

        <input className="button" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default MovieShowReviewForm
