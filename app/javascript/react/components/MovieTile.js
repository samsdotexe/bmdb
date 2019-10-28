import React from "react"

const MovieTile = (props) => {
  return (
    <center>
      <img src={props.poster} alt="{props.name} poster" className="index-movie-poster"/>
      </center>
  )
}

export default MovieTile
