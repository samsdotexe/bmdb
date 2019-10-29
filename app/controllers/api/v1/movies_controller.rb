class Api::V1::MoviesController < ApplicationController
  def index
    render json: Movie.all
  end

  def show
    movie = Movie.find(params[:id])
    render json: movie
  end

  def new
    @movie = Movie.new
  end

  def create
    @new_movie = Movie.new(movie_params)
  #   fruit = Fruit.find(params[:fruit_id])
  #   new_review.fruit = fruit
  #   new_review.user = User.first
  #   if new_review.save
  #     render json: {fruit:fruit, reviews:fruit.reviews}
  #   else
  #     render json: new_review.errors
  #   end
  end
end
