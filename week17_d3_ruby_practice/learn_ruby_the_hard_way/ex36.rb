# Exercise 36:

def money_room
    puts "This room is full of money.  How much do you take?"

    print "> "
    choice = $stdin.gets.chomp

    # this line has a bug, so fix it
    if choice.include?("0") || choice.include?("1")
        how_much = choice.to_i
    else
        dead("Man, learn to type a number.")
    end

    if how_much < 50
        puts "Nice, you're not greedy, you win!"
        exit(0)
    else
        dead("You greedy bastard!")
    end
end
  
  
def killer_room
    puts "There is a killer here."
    puts "The killer has a bunch of weapon."
    puts "The fat killer is in front of another door."
    puts "How are you going to move the killer?"
    killer_moved = false
  
    while true
      print "> "
      choice = $stdin.gets.chomp
  
      if choice == "take weapon"
        dead("The killer looks at you then slaps your face off.")
      elsif choice == "taunt killer" && !killer_moved
        puts "The killer has moved from the door. You can go through it now."
        killer_moved = true
      elsif choice == "taunt killer" && killer_moved
        dead("The killer gets pissed off and chops your leg off.")
      elsif choice == "open door" && killer_moved
        money_room
      else
        puts "I got no idea what that means."
      end
    end
end
  
  
def crazy_room
    puts "Here you get confused."
    puts "He, it, whatever stares at you and you go insane."
    puts "Do you flee for your life or eat your head?"
  
    print "> "
    choice = $stdin.gets.chomp
  
    if choice.include? "flee"
      start
    elsif choice.include? "head"
      dead("Well that was tasty!")
    else
      crazy_room
    end
end
  
  
def dead(why)
    puts why, "Good job!"
    exit(0)
  end
  
  def start
    puts "You are in a dark room."
    puts "There is a door to your right and left."
    puts "Which one do you take?"
  
    print "> "
    choice = $stdin.gets.chomp
  
    if choice == "left"
      killer_room
    elsif choice == "right"
      crazy_room
    else
      dead("You stumble around the room until you starve.")
    end
end
  
start