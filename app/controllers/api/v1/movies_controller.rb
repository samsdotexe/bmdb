class Api::V1::MoviesController < ApplicationController
  require "net/http"

  protect_from_forgery except: :json

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
    @movie = params["body"]
    # @movie = params["movie"]["body"]
    # @rating = params["rating"]

    url = URI.parse("http://www.omdbapi.com/?apikey=c8c5e403&t=#{@movie}")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }

    response = JSON.parse(res.body)

    if response["Poster"] != "N/A"
      @poster = response["Poster"]
    else
      @poster = "https://imgur.com/EBVGtkB"
    end

    @new_movie = Movie.new({
      title: response["Title"],
      year: response["Year"],
      rated: response["Rated"],
      released: response["Released"],
      runtime: response["Runtime"],
      genre: response["Genre"],
      director: response["Director"],
      plot: response["Plot"],
      poster: @poster,
      imdb_rating: response["Ratings"][0]["Value"]
      # user_rating: @rating
      }
    )

    if @new_movie.save
      render :root
    else
      render json: @new_movie.errors
    end
  end
end
