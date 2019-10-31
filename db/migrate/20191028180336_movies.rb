class Movies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :year
      t.string :rated
      t.string :released
      t.string :runtime
      t.string :genre
      t.string :director
      t.string :plot
      t.string :poster
      t.integer :imdb_rating
      t.integer :user_rating

      t.timestamps
    end
  end
end
