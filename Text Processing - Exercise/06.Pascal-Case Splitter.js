function pascalCaseSplitter(date) {
    let output = '';
    output += date[0];
    for (let i = 1; i < date.length; i++) {
        let letter = date[i];
        if (letter === letter.toUpperCase()) {
            output += `, ${letter}`;
        } else {
            output += letter;
        }
    }
    console.log(output);
}
pascalCaseSplitter(
    'SplitMeIfYouCanHaHaYouCantOrYouCan'
);