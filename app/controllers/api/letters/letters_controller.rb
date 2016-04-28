class Api::Letters::LettersController < Api::Letters::BaseController
	def index
		respond_with Letter.all
	end

	def create
		respond_with :api, :letters, Letter.create(letter_params)
	end

	private
		def letter_params
			params.require(:letter).permit(:id, :applicant_name,
				:date, :job, :quality, :salutation, :interviewer_name)
		end
end