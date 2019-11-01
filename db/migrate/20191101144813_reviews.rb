class Reviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :movie

      t.string :user_id, null: false
      t.string :movie_id, null: false
      t.integer :rating, null: false
      t.string :review

      t.timestamps
    end
  end
end
