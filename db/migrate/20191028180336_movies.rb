class Movies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :title, null: false
      t.string :plot
      t.string :poster

      t.timestamps
    end
  end
end
