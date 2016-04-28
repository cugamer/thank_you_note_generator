class ChangeSalutationInLetters < ActiveRecord::Migration
  def change
  	remove_column :letters, :saluation
  	add_column :letters, :salutation, :string
  end
end
