import React from "react"

const MovieTile = (props) => {
  return (
    <div>
      <img src={props.poster} alt="{props.name} poster" className="index-movie-poster"/>
      </div>
  )
}

export default MovieTile
