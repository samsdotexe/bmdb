import React, { useState, useEffect } from "react"

import ReviewTile from "./ReviewTile"

const ReviewIndexContainer = (props) => {
    const reviewTiles = props.reviews.map(review => {
      return (
        <ReviewTile
          key={review.id}
          id={review.id}
          rating={review.rating}
          review={review.review}
          user={review.user_id}
        />
      )
    })


  return (
    <div>
      <hr width="100%"/>
      {reviewTiles}
    </div>
  )
}

export default ReviewIndexContainer
