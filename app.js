const alphabetStart = 'abcdefghijklm'
const alphabetEnd = 'nopqrstuvwxyz'

const encryptText = () => {
	var encryptedText = ''
	var text = encryptor.textToEncrypt.value.toLowerCase()

	// Iterate through each character in the text to check if it is in alphabetStart or alphabetEnd
	for (var i = 0; i < text.length; i++) {
		var letterToCheck = text[i]
		if (alphabetStart.indexOf(letterToCheck) >= 0) {
			encryptedText += alphabetEnd[alphabetStart.indexOf(letterToCheck)]
		} else if (alphabetEnd.indexOf(letterToCheck) >= 0) {
			encryptedText += alphabetStart[alphabetEnd.indexOf(letterToCheck)]
		} else {
			encryptedText += letterToCheck
		}
	}

	document.getElementById('encryptedText').value = encryptedText
}
