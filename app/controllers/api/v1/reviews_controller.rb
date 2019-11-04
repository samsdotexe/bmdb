class Api::V1::ReviewsController < ApplicationController

  protect_from_forgery unless: -> { request.format.json? }

  def index

  end

  def create
    @review = params['body']
  end
end
