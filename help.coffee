exports.getDocs = () ->
	return {
		calc: 'Calculates the expression passed to the command. `!calc 2+3`'
		date: 'Gets the current date and time. `!date`'
		weather: 'Gets the weather for the location passed to the command. `!weather 60169`'
		xkcd: 'Gets the comic with the number passed to the command. If no number is passed to the command, then the most recent comic is returned. `!xkcd 1` or `!xkcd`'
		dict: 'Gets the definition, if it exists, of the word passed to the command. `!dict dictionary`'
		help: 'Brings this help dialog up. `!help`'
		clear: 'Clears the chat log. `!clear`'
		hide: 'Hides all commands that you said to Jarvis. `!hide`'
	}