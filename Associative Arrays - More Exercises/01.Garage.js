function garage(garageLine) {
    let garages = {};
    inGarage();

    function inGarage() {
        for (let el of garageLine) {
            let cage = Number(el.split(' - ')[0]);
            let cars = el.split(' - ')[1].split(', ');

            //create object
            if (!garages[cage]) {
                garages[cage] = [];
            }
            //create array for holding current cage cars
            let current = []
            // separate car of cars
            for (let car of cars) {
                //replace unneeded chars
                let line = car.replace(': ', ' - ');
                current.push(line);
            }
            //holding the current car
            garages[cage].push(current);
        }
    }
    //iterate if garages cages
    for (let [garage, cage] of Object.entries(garages)) {
        console.log(`Garage № ${garage}`);
        //iterate in current cage
        for (let car of cage) {
            console.log(`--- ${car.join(', ')}`);
        }
    }
}


garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
])