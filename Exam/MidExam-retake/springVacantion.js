function springVacantion(input) {
    const days = Number(input[0]);
    const budget = Number(input[1]);
    const count = Number(input[2]);
    const priceFuel = Number(input[3]);
    const food = Number(input[4]);
    let hotel= Number(input[5]);

    if (count > 10) {
        hotel *= 0.75;
    }

    let currentExpenses = (hotel + food) * count * days;
    const distances = input.slice(6);

    for (let i = 1; i <= days; i++) {
        const distance = Number(distances[i - 1]);
        currentExpenses += distance * priceFuel;

        if (i % 3 === 0 || i % 5 === 0) {
            currentExpenses *= 1.4;
        }

        if (i % 7 === 0) {
            currentExpenses -= currentExpenses / count;
        }

        if (currentExpenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(currentExpenses - budget).toFixed(2)}$ more.`);
            return;
        }

    }

    console.log(`You have reached the destination. You have ${(budget - currentExpenses).toFixed(2)}$ budget left.`);
}

springVacantion(["7",
"12000",
"5",
"1.5",
"10",
"20",
"512",
"318",
"202",
"154",
"222",
"108",
"123"])

springVacantion(["10",
"20500",
"11",
"1.2",
"8",
"13",
"100",
"150",
"500",
"400",
"600",
"130",
"300",
"350",
"200",
"300"])