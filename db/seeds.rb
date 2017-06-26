# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Joke.delete_all

j1 = Joke.create(joke: 'What bee gives milk?', answer: 'Boo Bees', funny: 'true')
j2 = Joke.create(joke: 'How many tickles does it take to make an octopus laugh?', answer: 'Ten Tickles', funny: 'true')
j3 = Joke.create(joke: 'What do you call a fake noodle?', answer: 'An Impasta', funny: 'true')
j4 = Joke.create(joke: 'What do you call an alligator in a vest?', answer: 'An Investigator', funny: 'false')
j5 = Joke.create(joke: 'Did you hear about the hungry clock?', answer: 'It went back four seconds!', funny: 'false')
j6 = Joke.create(joke: 'Why did the cow pack her bags?', answer: 'Because she had to mooooooo!', funny: 'true')
