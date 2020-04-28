# Player class
class Player
	attr_accessor :name, :hand, :bankroll, :total
	def initialize name, hand, bankroll, total
		@name = name
		@hand = []
		@bankroll = bankroll
		@total = total
	end
end

# Create Player and Computer Players
human = Player.new "Human", [], 100, 0
computer = Player.new "The House", [], 10000, 0


# Deck of 52 playing cards
class Deck
	def initialize
		#create an array of face values, suits and an empty array for cards
		@faces = [*(2..10), 'Jack', 'Queen', 'King', 'Ace']
		@suits = ['clubs', 'spades', 'hearts', 'diamonds']
		@cards = []
        #Create each card based on face and suit
		@faces.each do |face|
			if face.class == Integer
				value = face
			elsif face == 'Ace'
				value = 11
			else
				value = 10
			end
			@suits.each do |suit|
				@cards << Card.new(value)
			end
		end
	# Shuffle the cards
	@cards.shuffle!
	end

	# deal the players their cards
	def deal (num, player)
		# shift the deck each time a card is dealt to a player
		num.times {@cards.shift.generate_card(player)}
	end
end

# Card class
class Card
	attr_accessor :value
	def initialize value
		@value = value
	end

	# generates a new card from the deck
	# takes a parameter "player" and adds to that player's hand
	def generate_card (player)
		new_card = Card.new value
		player.hand << new_card
		# measure the value of the players current hand
		player.total = player.total + new_card.value
	end
end

# Get Player name
puts "Welcome to the casino. What is your name?"
name = gets.chomp
puts "\nWelcome #{name}."
human.name = "#{name}"

# Start Game Loop
loop do
	puts "(d)eal me or (q)uit table"
	deal_me = gets.chomp.downcase
		# If player quits table, end loop
		if deal_me == "q"
			puts "See you soon."
			break
		else
			# reset player hands
			human.hand.clear
			human.total = 0
			computer.hand.clear
			computer.total = 0

			# deal player cards
			deck = Deck.new
            deck.deal(2, human)
            deck.deal(2, computer)
            puts "The score of your cards is #{human.total}"
            puts "The score of The House is #{computer.total}"
			
			# Check the score
			if human.total <= 21 && computer.total <= 21
				if human.total > computer.total
					puts "You win!"
					human.bankroll += 10
					computer.bankroll -= 10
				elsif human.total < computer.total
					puts "Computer wins."
					human.bankroll -= 10
					computer.bankroll += 10
				else
					puts "It's a tie. Computer Wins."
					human.bankroll -= 10
					computer.bankroll += 10
				end
			# if human is above 21, human loses
			elsif human.total > 21 && computer.total <= 21
				puts "You went over 21. Computer wins."
				human.bankroll -= 10
				computer.bankroll += 10
			# if computer is above 21, human wins
			elsif human.total <= 21 && computer.total > 21
				puts "Computer went over 21. You win!"
				human.bankroll += 10
				computer.bankroll -= 10
			else
				# if both are above 21, no one wins.
				puts "Both hands went over 21. Nobody wins this round."
			end
			# Tell bankroll at all times
			puts "You currently have $#{human.bankroll}"
			puts "The House has $#{computer.bankroll}\n\n"
				if human.bankroll <= 0
					puts "You have no more money. You lost."
					break
				else
				# Prompt to play again
				puts "Play again?"
				end
		end
	end