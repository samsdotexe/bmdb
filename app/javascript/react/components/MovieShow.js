import React from "react"

const MovieShow = (props) => {
  return (
    <div>
      <div className="grid-x">
        <div className="cell small-3">
          <img src={props.poster} alt={props.name} className="show-movie-poster"/>
        </div>

        <div className="cell small-9">
          <div className="show-page-text">
            <h3>{props.title}</h3>
            <p>Rated {props.rated} &nbsp; |&nbsp;&nbsp;&nbsp;
               {props.runtime} &nbsp; |&nbsp;&nbsp;&nbsp;
               {props.genre} &nbsp; |&nbsp;&nbsp;&nbsp;
               {props.year}
            </p>
            <hr width="100%"/>
            <p>{props.plot}</p>
            <p>Director: {props.director}</p>
          </div>
        </div>
      </div>

      <div>
        <form onSubmit={props.reviewSubmit}>
          <hr width="100%"/>
          <h3>Rate this movie</h3>

          <p>Enjoyment rating:</p>
          <p>
            <input type="radio" name="user-rating" value={1} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={2} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={3} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={4} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={5} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={6} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={7} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={8} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={9} onClick={props.changeRating}/>&nbsp;&nbsp;&nbsp;
            <input type="radio" name="user-rating" value={10} onClick={props.changeRating}/>
          </p>

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
    </div>
  )
}

export default MovieShow
