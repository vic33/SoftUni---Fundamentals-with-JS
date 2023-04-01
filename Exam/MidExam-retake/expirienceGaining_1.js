function problem2(input) {
    const yellowGold = input.shift().split(" ");
    const whiteGold = input.shift().split(" ");
    let pairOfEarrings = yellowGold + whiteGold
    let sum = 0;

    if (pairOfEarrings === 10) {
        sum =1;
    }

    // let currentExpenses = (hotel + food) * count * days;
    // const distances = input.slice(6);

    for (let i = input; i >= pairOfEarrings; i++) {
        // const sum = sum [i - 1];
        sum += sum * pairOfEarrings;

        // if (i % 3 === 0 || i % 5 === 0) {
        //     sum *= 1.4;
        // }

        // if (i % 7 === 0) {
        //     sum -= 2;
        // }

        if ( pairOfEarrings >= 10 ) {
            console.log(`Keep trying, you need ${sum} more earrings.`);

        }

    }

    console.log(`Great success, you created ${sum} earrings.`);
}


problem2(['5 3 2 2 4',
'5 5 8 2 6'])

problem2(['2 7 8 5 1 6 1 7 5',
'8 3 2 7 9 4 9 2 3'])