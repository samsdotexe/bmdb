import React from "react"

const MovieShow = (props) => {
  return (
    <div className="grid-x">
      <div className="cell small-3">
        <img src={props.poster} alt="{props.name} poster" className="show-movie-poster"/>
      </div>

      <div className="cell small-9">
        <div className="show-page-text">
          <h3>{props.title}</h3>
          <p>Rated {props.rated} &nbsp; |&nbsp;&nbsp;&nbsp;
             {props.runtime} &nbsp; |&nbsp;&nbsp;&nbsp;
             {props.genre} &nbsp; |&nbsp;&nbsp;&nbsp;
             {props.year}
          </p>
          <p>{props.plot}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieShow
