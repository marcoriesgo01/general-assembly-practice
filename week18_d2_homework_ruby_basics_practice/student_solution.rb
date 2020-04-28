# Hello World: 
# 1:
p "Hello World"

# 2:
adjective = "Big Bad"
p "Hello #{adjective} World"

# 3:
worldGreeting = "Hello World"
p worldGreeting.upcase

# GitHub Commit 1


# Nums Array and Enumerables: 
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0, 35, 19, 66, 3, 22, 21, 4, 4, 4, 0, 1, 2, 3, 4, 12, 15]

# 1:
p nums.uniq 

# 2:
nums.push(5)
nums.pop
nums.shift
nums.unshift(5)
p nums.length

# 3:
p nums.include?(5)

# 4:
p nums.find_all {|i| i > 10}

# 5:
p nums.all? {|i| i > 0}

# 6:
p nums.any? {|i| i % 8 == 0}

# 7:
p nums.count {|i| i > 4}

# 8:
nums.each_with_index {|i, index| p "The number times its index is #{index * i}"}

# 9:
p nums.find {|i| i % 5 == 0 && i % 7 == 0 && i > 0 }

# 10:
p nums.find_index {|i| i % 5 == 0 && i % 7 == 0 && i > 0 }

# 11:
p nums.first(3)

# 12:
p nums.last(5)

# 13:
p nums.group_by {|i| i % 3}

# 14:
p nums.minmax

# 15:
p nums.reject {|i| i % 3 != 0}

# 16:
p nums.select {|i| i % 5 == 0}

# GitHub Commit 2


# Color Array: 
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

# 1:
p colors.sample

# 2:
p colors.reverse

# 3:
colors.each {|color| p color.upcase}

# GitHub Commit 3


# Methods:

# 1:
def find_area height, width
    area = height * width
    p area
end
find_area 3, 5

# 2:
nums = [5, 5, 6, 7, 2, 4, 3, 2, 1, 9, 7, 6, 0, 0]

def multiply_each_by_five arr
    arr.each{|i| p i * 5}
end
multiply_each_by_five nums

# GitHub Commit 4

# Methods With a Hash:
book = {
  title: 'The Great Gatsby',
  author: 'F Scott Fitzgerald',
  year: 1925,
  price: 10
}

lamp = {
  type: 'reading',
  brand: 'Ikea',
  price: 25
}

table = {
  type: 'bed side',
  brand: 'Crate & Barrel',
  color: 'birch',
  price: 50
}
# 1.
def print_price hash
    p hash[:price]
end
print_price book

# 2.
def print_item_sums hash1, hash2
    p hash1[:price] + hash2[:price]
end
print_item_sums book, lamp

# GitHub Commit 5


# Solving Problems with Ruby
# Euler Problem 1:
sum = 0
(1...1000).each do |i|
    sum += 1 if (i % 3 == 0 || i % 5 == 0)
end
puts sum

# Primes:
# 1:
require 'prime'
def check_prime? num
    Prime.prime?(num)
end
p check_prime? 20

# 2:
def get_primes limit
    (1..limit).each do |i|
        p Prime.prime?(i)
    end
end 
get_primes 10