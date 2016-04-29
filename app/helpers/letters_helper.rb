module LettersHelper
	def formatLetter(newLetter)
		letterGreeting = "Dear #{newLetter.interviewer_name},"
		letterBody = "It was a pleasure to speak to you on #{newLetter.date} regarding the position of #{newLetter.job}.  As I mentioned in the interview I am very #{newLetter.quality} and I'm certain you'll agree that this makes me perfect for this position.  I look forward to hearing back from you soon regarding your decision."
		letterSalutation = "#{newLetter.salutation},"
		letterName = newLetter.applicant_name

		letterOutput = {id: newLetter.id, 
						letterGreeting: letterGreeting,
						letterBody: letterBody,
						letterSalutation: letterSalutation,
						letterName: letterName}
		return letterOutput
	end
end