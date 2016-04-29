class Api::V1::LettersController < Api::V1::BaseController
	def index
		respond_with Letter.all
	end

	def create
		newLetter = Letter.create(letter_params)
		letter = "Dear #{newLetter.interviewer_name},\n\nIt was a pleasure to speak to you on #{newLetter.date} regarding the position of #{newLetter.job}.  As I mentioned in the interview I am very #{newLetter.quality} and I'm certian you'll agree that this makes me perfect for this position.  I look forward to hearing back from you soon regarding your decision.\n\n#{newLetter.salutation}\n\n#{newLetter.applicant_name}"
		respond_with :api, :v1, :letter
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