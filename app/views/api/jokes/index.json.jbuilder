@jokes.each do |joke|
  json.set! joke.id do
    json.extract! joke, :id, :joke, :answer, :funny
  end
end
