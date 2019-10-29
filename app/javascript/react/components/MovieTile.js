import React from "react"

const MovieTile = (props) => {
  return (
    <div>
      <a href={`/movies/${props.id}`}>
        <img src={props.poster} alt="{props.name} poster" className="index-movie-poster"/>
      </a>
    </div>
  )
}

export default MovieTile
