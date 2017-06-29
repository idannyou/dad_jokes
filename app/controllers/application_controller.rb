class ApplicationController < ActionController::Base

  # default protect_from_forgery blocked post commands (find out why?)
  protect_from_forgery with: :exception

end
