import React from "react"

const MovieShowRadio = (props) => {
  return (
    <div>
      <input type="radio" name="user-rating" value={props.value} onClick={props.changeRating}/>
    </div>
  )
}

export default MovieShowRadio
