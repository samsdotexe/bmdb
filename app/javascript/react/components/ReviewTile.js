import React from "react"

const ReviewTile = (props) => {
  return (
    <div>
      <h4>
        <img src="https://imgur.com/Ccof2Ub.png" className="star"/>
        {props.rating}
      </h4>
      <p>{props.review}</p>
    </div>
  )
}

export default ReviewTile
