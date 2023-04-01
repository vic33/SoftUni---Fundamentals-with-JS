function stringManipulator(arr) {
    let str = arr.shift();
    arr.pop();
    arr.forEach(line => {
        const [command, x, i] = line.split(' ');
        console.log(manipulateString()[command](x, i));
    });
    function manipulateString() {
        return {
            Translate: (char, replacement) =>
                (str = str.split(char).join(replacement)),
            Includes: substring => (str.includes(substring) ? 'True' : 'False'),
            Start: substring => (str.startsWith(substring) ? 'True' : 'False'),
            Lowercase: () => (str = str.toLowerCase()),
            FindIndex: char => str.lastIndexOf(char),
            Remove: (startIndex, count) => {
                const strToRemove = str.substring(
                    Number(startIndex),
                    Number(startIndex) + Number(count)
                );
                str = str.replace(strToRemove, '');
                return str;
            },
        };
    }
}

stringManipulator (["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])

console.log(`----------`);

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])