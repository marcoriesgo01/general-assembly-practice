# Exercise 42:

## Animal is-a object look at the extra credit
class Animal
end

## dog is-a class of Animal 
class Dog < Animal
  def initialize(name)
    ## is-a object that is an instance of Dog
    @name = name
  end
end

## cat is-a class of Animal
class Cat < Animal
  def initialize(name)
    ## @name is an object that is-a instance of Cat
    @name = name
  end
end

## person is a class
class Person
  def initialize(name)
    ## has-a name which is an instance of person
    @name = name
    ## Person has-a pet of some kind
    @pet = nil
  end
  attr_accessor :pet
end

## Employee is-a person but Employee is also a class
class Employee < Person
  def initialize(name, salary)
        ## This is an instance of Employee w/ a specific name & salary.
        super(name)
        ## Employee has-a super, and each instance has-a specific super.
        @salary = salary
    end
end

## Fish is-a class
class Fish
end

## Salmon is-a Fish, but Salmon is-a class
class Salmon <  Fish
end

## Halibut is-a Fish, and Halibut is-a class, but Halibut is NOT a Salmon
class Halibut < Fish
end


## rover is-a Dog
rover = Dog.new("Rover")

## satan is-a Cat
satan = Cat.new("Satan")

## Mary is-a Person
mary = Person.new("Mary")

## mary has-a pet cat named satan
mary.pet = satan

## frank is an instance of Employee w/ name "Frank", and salary 120000
frank = Employee.new("Frank", 120000)

## frank has-a pet dog that has-a instance name rover
frank.pet = rover

## flipper is-a instance of Fish
flipper = Fish.new()

## crouse is-a Salmon which is-a Fish
crouse = Salmon.new()

## harry is-a Halibut and Halibut is-a Fish
harry = Halibut.new()