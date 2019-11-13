class Api::V1::ReviewsController < ApplicationController

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Review.where(movie_id: params["movie_id"])
  end

  def create
    @user = current_user.id
    @movie = params["movie_id"]
    @rating = params["rating"]
    @review = params["review"]

    @new_review = Review.create({
      user_id: @user,
      movie_id: @movie,
      rating: @rating,
      review: @review
    })
  end
end
