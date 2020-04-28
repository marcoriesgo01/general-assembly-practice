# Integer
# Times

# Using number.times will loop over the function that follows it a set number of times.  
5.times {puts "hi"}

# You can also use a parameter to know which iteration number has run.
hello = "greeting" 
4.times {|i| puts "This is #{hello} ##{i}"}

a = 12
b = 4
2.times {puts a + b}
# puts 16 twice
