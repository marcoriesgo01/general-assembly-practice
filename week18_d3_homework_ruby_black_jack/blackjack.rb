# Players:

class Player
    attr_accessor :name, :bankroll, :hand
    def initialize name, bankroll, hand
        @name = ""
        @bankroll = 100
        @hand = []
    end
end

#Create the class of computer to play against the player
class Computer
    attr_accessor :name, :bankroll, :hand
    def initialize name, bankroll, hand
        @name = ""
        @bankroll = 10000
        @hand = []
    end
end

# The Deck:
@deck = []

#Create a class of card to create new cards that will be added to the deck array above.
class Card
    attr_accessor :value
    def initialize value
        @value = value
    end
end

# Set the values: Each number with corresponding point value to be assigned. Jack, King, Queen have value of 10. Ace is 11. 
deck_values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11]
4.times do 
    deck_values.each do |val|
        @deck << Card.new(val)
    end
end

# Check if the deck has been created correctly to have 52 cards
p @deck.length





