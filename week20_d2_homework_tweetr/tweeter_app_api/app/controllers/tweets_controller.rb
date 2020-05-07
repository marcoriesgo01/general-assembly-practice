class TweetsController < ApplicationController
    def index
      render(json: { tweets: Tweet.all })
    end
  
    def show
      # Input comes in from the `params` hash
      render(json: Tweet.find(params[:id]))
    end

    def create
        tweet = Tweet.new(tweet_params)
    
        if tweet.save
          render json: { tweet: tweet }
        else
          render(status: 422, json: { tweet: tweet, errors: tweet.errors })
        end
    end

    def update
        tweet = Tweet.find(params[:id])
        tweet.update(tweet_params)
        render(json: { tweet: tweet })
    end
  
    private
  
    def tweet_params
      # Returns a sanitized hash of the params with nothing extra
      params.required(:tweet).permit(:title, :content, :author)
    end
end