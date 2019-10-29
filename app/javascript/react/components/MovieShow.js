import React from "react"

const MovieShow = (props) => {
  return (
    <div>
      <img src={props.poster} alt="{props.name} poster" className="show-movie-poster"/>
      <h1>this is {props.title}</h1>
    </div>
  )
}

export default MovieShow
