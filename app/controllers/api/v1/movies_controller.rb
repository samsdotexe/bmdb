class Api::V1::MoviesController < ApplicationController
  def index
    render json: Movie.all
  end
end
