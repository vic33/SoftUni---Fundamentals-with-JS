function leapYear(start, end){

let sum = 0;
let numbers = '';

    for (let n = start; n <= end; n++) {
        sum += n;
        numbers += `${n} `;
    }
    console.log(numbers);
    console.log(`Sum: ${sum}`);
}

leapYear(5, 10)