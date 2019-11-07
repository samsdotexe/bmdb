class Api::V1::ReviewsController < ApplicationController

  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Review.where(movie_id: params["movie_id"])
  end

  def create
    @rating = params["rating"]
    @movie = params["movie_id"]
    @user = current_user.id
    @review

    if params["review"].length
      @review = params["review"]
    end

    @new_review = Review.create({
      movie_id: @movie,
      user_id: @user,
      rating: @rating,
      review: @review
      }
    )
  end
end
