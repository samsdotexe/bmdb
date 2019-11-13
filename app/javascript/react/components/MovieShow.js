import React from "react"

const MovieShow = (props) => {
  const line = <span className="line">|</span>

  return (
    <div className="grid-x">
      <div className="cell small-3">
        <img src={props.poster} alt={props.name} className="show-movie-poster"/>
      </div>

      <div className="cell small-9">
        <div className="show-page-text">
          <h3>{props.title}</h3>

          <p>Rated {props.rated}
             {line}{props.runtime}
             {line}{props.genre}
             {line}{props.year}
          </p>

          <hr width="100%"/>

          <p>{props.plot}</p>
          <p>Director: {props.director}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieShow
