class Api::V1::LettersController < Api::V1::BaseController
	def index
		respond_with Letter.all
	end

	def create
		letter = Letter.create(letter_params)
		outputLetter = "Dear #{letter.interviewer_name},\n\nIt was a pleasure to speak to you on #{letter.date} regarding the position of #{letter.job}.  As I mentioned in the interview I am very #{letter.quality} and I'm certian you'll agree that this makes me perfect for this position.  I look forward to hearing back from you soon regarding your decision.\n\n#{letter.salutation}\n\n#{letter.applicant_name}"
		p "-----------------------------------"
		puts outputLetter
		respond_with :api, :v1, letter
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