class Api::V1::LettersController < Api::V1::BaseController
	def index
		respond_with Letter.all
	end

	def create
		newLetter = Letter.create(letter_params)
		
		formatLetter(newLetter)

		render :json => formatLetter(newLetter)
	end

	private
		def letter_params
			params.require(:letter).permit(:id, :applicant_name,
				:date, :job, :quality, :salutation, :interviewer_name)
		end
end