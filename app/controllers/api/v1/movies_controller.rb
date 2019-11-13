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
    @movie = params["_json"]
    @api_key = "c8c5e403"

    url = URI.parse("http://www.omdbapi.com/?apikey=#{@api_key}&t=#{@movie}")
    req = Net::HTTP::Get.new(url.to_s)
    res = Net::HTTP.start(url.host, url.port) {|http|
      http.request(req)
    }

    response = JSON.parse(res.body)

    @new_movie = Movie.create({
      title: response["Title"],
      year: response["Year"],
      rated: response["Rated"],
      released: response["Released"],
      runtime: response["Runtime"],
      genre: response["Genre"],
      director: response["Director"],
      plot: response["Plot"],
      poster: response["Poster"],
    })
  end
end
