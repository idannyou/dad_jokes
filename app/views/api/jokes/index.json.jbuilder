@jokes.each do |joke|
  json.set! joke.id do
    json.extract! joke, :joke, :answer, :funny
  end
end
