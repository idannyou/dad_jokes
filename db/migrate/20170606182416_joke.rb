class Joke < ActiveRecord::Migration[5.0]
  def change
    create_table :jokes do |t|
      t.string :joke, null: false
      t.string :answer, null: false
      t.boolean :funny, null: false

      t.timestamps
    end
  end
end
