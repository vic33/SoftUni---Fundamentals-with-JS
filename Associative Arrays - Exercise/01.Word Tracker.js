function wordTracker(wordArray) {
    let first = wordArray.slice(0, 1).join(' ').split(' ');
    let list = wordArray.slice(1);

    let occurrences = {};
    createObject();
    //creating object by given word and check how many times repeat it  
    function createObject() {
        for (let el of first) {
            let counter = 0;
            for (let listEl of list) {
                if (listEl === el) {
                    counter++;
                }
            } 
            occurrences[el] = counter;
        }
    }

    // getting object properties as array and sort them by object values(second array element ) 
    let sorted = Object.entries(occurrences).sort((a, b) => b[1] - a[1])
    for (let el of sorted) {
        let [word, count] = [el[0], el[1]];
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])
