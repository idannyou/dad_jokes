class Api::JokesController < ApplicationController

  def index
    @jokes = Joke.all
  end

  def show
    render json: Joke.find(params[:id])
  end

  def create
    @joke = Joke.new(joke_params)
    if @joke.save
      render json: @joke
    else
      render json: @joke.errors.full_messages, status: 422
    end
  end

  def destroy
    @joke = Joke.find(params[:id])
    @joke.destroy
    render json: @joke
  end

  def update
    @joke = Joke.find(params[:id])
    if @joke.update(joke_params)
      render json: @joke
    else
      render json: @joke.errors.full_messages, status: 422
    end

  end

  private

  def joke_params
    params.require(:joke).permit(:joke, :answer, funny: false)
  end

end
