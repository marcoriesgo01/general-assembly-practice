# Players:

class Player
    attr_accessor :name :bankroll :hand
    def initialize name, bankroll, hand
        @name = name
        @bankroll = 100
        @hand = []
    end
end

human = Player.new "Player", 100, [] 
computer = Player.new "the_house", 10000, []



