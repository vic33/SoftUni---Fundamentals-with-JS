function train(mainArray) {
    let wagons = mainArray.shift().split(' ').map(Number);
    let maxInWagon = mainArray.shift();
    maxInWagon = Number(maxInWagon);
    let passengers = 0;

    for (let i = 0; i < mainArray.length; i++) {
        let arrayElement = mainArray[i];
        let command = arrayElement.split(' ');

        if (command[0] === "Add") {
            let addWagon = Number(command[1]);
            wagons.push(addWagon);
        } else {
            passengers = Number(command[0]);
            
            for (let j = 0; j < wagons.length; j++) {
                let currentWagon = wagons[j];
                if (currentWagon + passengers <= maxInWagon) {
                    let topup = currentWagon + passengers;
                    wagons.splice(j, 1, topup);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])