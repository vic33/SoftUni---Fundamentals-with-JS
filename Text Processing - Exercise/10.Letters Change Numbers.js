function lettersChangeNumbers(input) {
    let total = 0;
    let game = input.split(' ');
    for (let gameEl of game) { // part of array
        if(gameEl.length === 0) continue; //IF empty string
        let first = gameEl[0];
        let last = gameEl.slice(-1);
        let num = Number(gameEl.slice(1, -1));
        //taking number from first letter by arguments
        if (first === first.toLowerCase()) {
            first = first.charCodeAt() - 96;
            num *= first;
        }
        else {
            first = first.charCodeAt() - 64;
            num /= first;
        }
        //taking number from last letter by arguments
        if (last === last.toLowerCase()) {
            last = last.charCodeAt() - 96;
            num += last;
        }
        else {
            last = last.charCodeAt() - 64;
            num -= last;
        }
        total += num;
    }
    console.log(total.toFixed(2));
}
// lettersChangeNumbers('A12b s17G');
lettersChangeNumbers('P34562Z q2576f   H456z');
// lettersChangeNumbers('a1A');