import React from "react"

const MovieShowRadio = (props) => {
  return (
    <span>
      <input type="radio" name="user-rating" className="radio-button" value={props.value} onClick={props.changeRating}/>

      <span className="radio-value">
        {props.value}
      </span>
    </span>
  )
}

export default MovieShowRadio
