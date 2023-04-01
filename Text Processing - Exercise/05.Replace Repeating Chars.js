function replaceRepeatingChars(letterSequence) {
    let clearedText = '';
    for (let char of letterSequence) {
        if (clearedText.length = 0) {
            clearedText = char;
        } else {
            if (char !== clearedText[clearedText.length - 1]) {
                clearedText += char;
            }
        }
    }
    console.log(clearedText);
}
replaceRepeatingChars(
    'aaaaabbbbbcdddeeeedssaa'
);