function vacantion(groupOfPeople, typeOfPeople, day){

let price = 0;

    if(day === "Friday" ) {
        if (groupOfPeople >= 30 && typeOfPeople == `Students`) {
            price = (groupOfPeople * 8.45) * 0.85;
        } else if (groupOfPeople >= 100 && typeOfPeople == 'Business') {
            price = (groupOfPeople * 10.90) - (10 * 10.90);
        } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfPeople == 'Regular') {
            price = (groupOfPeople * 15) * 0.95;
        } else if (typeOfPeople == `Students`) {
            price = groupOfPeople * 8.45;
        } else if (typeOfPeople ==`Business`) {
            price = groupOfPeople * 10.90;
        } else {
            price = groupOfPeople * 15;
        }
        console.log(`Total price: ${price.toFixed(2)}`)
    } else if(day === "Saturday") {
        if (groupOfPeople >= 30 && typeOfPeople == `Students`) {
            price = (groupOfPeople * 9.80) * 0.85;
        } else if (groupOfPeople >= 100 && typeOfPeople == 'Business') {
            price = (groupOfPeople * 15.60) - (10 * 15.60);
        } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfPeople == 'Regular') {
            price = (groupOfPeople * 20) * 0.95;
        } else if (typeOfPeople == `Students`) {
            price = groupOfPeople * 9.80;
        } else if (typeOfPeople ==`Business`) {
            price = groupOfPeople * 15.60;
        } else {
            price = groupOfPeople * 20;
        }
        console.log(`Total price: ${price.toFixed(2)}`)

    } else if(day === "Sunday") {
        if (groupOfPeople >= 30 && typeOfPeople == `Students`) {
            price = (groupOfPeople * 10.46) * 0.85;
        } else if (groupOfPeople >= 100 && typeOfPeople == 'Business') {
            price = (groupOfPeople * 16) - (10 * 16);
        } else if (groupOfPeople >= 10 && groupOfPeople <= 20 && typeOfPeople == 'Regular') {
            price = (groupOfPeople * 22.50) * 0.95;
        } else if (typeOfPeople == `Students`) {
            price = groupOfPeople * 10.46;
        } else if (typeOfPeople ==`Business`) {
            price = groupOfPeople * 16;
        } else {
            price = groupOfPeople * 22.50;
        }

        console.log(`Total price: ${price.toFixed(2)}`)
    }   
    
}

vacantion(40,
    "Regular",
    "Saturday")