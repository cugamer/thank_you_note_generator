class Api::V1::LettersController < Api::V1::BaseController
	def index
		respond_with Letter.all
	end

	def create
		respond_with :api, :v1, Letter.create(letter_params)
	end

	def show
	  respond_with Letter.find(params[:id])
	end

	private
		def letter_params
			params.require(:letter).permit(:id, :applicant_name,
				:date, :job, :quality, :salutation, :interviewer_name)
		end
end