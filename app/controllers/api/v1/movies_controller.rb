class Api::V1::MoviesController < ApplicationController
  require "net/http"

  protect_from_forgery unless: -> { request.format.json? }

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
    @movie = params["movie"]["body"]

    url = URI.parse("http://www.omdbapi.com/?apikey=c8c5e403&t=#{@movie}")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }

    response = JSON.parse(res.body)

    @new_movie = Movie.new({
      title: response["Title"],
      year: response["Year"],
      rated: response["Rated"],
      released: response["Released"],
      runtime: response["Runtime"],
      genre: response["Genre"],
      director: response["Director"],
      plot: response["Plot"],
      poster: response["Poster"],
      }
    )

    @new_review = Review.new({
      rating: params["rating"],
      review: params["review"]["body"],
      user: current_user,
      movie: @new_movie
      }
    )

    @new_review.user = current_user

    binding.pry

    if @new_movie.save
      render json: {id: @new_movie.id}

      @new_review.save

    else
      # render json: @new_movie.errors
      flash[:alert] = "Movie not found"
    end
  end
end
