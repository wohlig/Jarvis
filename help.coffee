exports.getDocs = () ->
    return {
        calc: 'Calculates the expression passed to the command. `!calc 2+3`'
        date: 'Gets the current date and time. `!date`'
        image: 'Gets a random image from Google Images. `!image dog`'
        weather: 'Gets the weather for the location passed to the command. `!weather 60169`'
        xkcd: 'Gets the comic with the number passed to the command. If no number is passed to the command, then the most recent comic is returned. `!xkcd 1` or `!xkcd`'
        help: 'Brings this help dialog up. `!help`'
        clear: 'Clears the chat log. `!clear`'
        hide: 'Hides all commands that you said to Jarvis. `!hide`'
    }
