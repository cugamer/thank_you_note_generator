class Api::V1::LettersController < Api::V1::BaseController
	def index
		respond_with Letter.all
	end

	def create
		newLetter = Letter.create(letter_params)
		letterGreeting = "Dear #{newLetter.interviewer_name}"
		letterBody = "It was a pleasure to speak to you on #{newLetter.date} regarding the position of #{newLetter.job}.  As I mentioned in the interview I am very #{newLetter.quality} and I'm certain you'll agree that this makes me perfect for this position.  I look forward to hearing back from you soon regarding your decision."
		letterSalutation = newLetter.salutation
		letterName = newLetter.applicant_name
		ActiveSupport.escape_html_entities_in_json = true 
		render :json => {id: newLetter.id, 
						letterGreeting: letterGreeting,
						letterBody: letterBody,
						letterSalutation: letterSalutation,
						letterName: letterName}
	end

	private
		def letter_params
			params.require(:letter).permit(:id, :applicant_name,
				:date, :job, :quality, :salutation, :interviewer_name)
		end
end