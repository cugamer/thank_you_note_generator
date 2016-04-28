class CreateLetters < ActiveRecord::Migration
  def change
    create_table :letters do |t|
      t.string :applicant_name
      t.string :date
      t.string :job
      t.string :quality
      t.string :saluation
      t.string :interviewer_name

      t.timestamps null: false
    end
  end
end
