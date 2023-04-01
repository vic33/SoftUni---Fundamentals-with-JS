function revealWords(suggestions, sentence) {
    let suggestionsArray = suggestions.split(', ');

    for (let currentWord of suggestionsArray) {
        let forCheck = '*'.repeat(currentWord.length);
        if (sentence.includes(forCheck)) {
            sentence = sentence.replace(forCheck, currentWord);
        }
    }
    console.log(sentence);
}

revealWords(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
)