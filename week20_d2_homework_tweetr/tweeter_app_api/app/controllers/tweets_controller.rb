class TweetsController < ApplicationController
    def index
      render(json: { tweets: Tweet.all })
    end
  
    def show
      # Input comes in from the `params` hash
      render(json: Tweet.find(params[:id]))
    end
  
    private
  
    def tweet_params
      # Returns a sanitized hash of the params with nothing extra
      params.required(:tweet).permit(:title, :content, :author)
    end
end