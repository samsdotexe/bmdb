import React from "react"

const MovieShowReviewForm = (props) => {
  return (
    <div>
      <form onSubmit={props.reviewSubmit}>
        <hr width="100%"/>
        <div className="error">{props.error}</div>
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
  )
}

export default MovieShowReviewForm
