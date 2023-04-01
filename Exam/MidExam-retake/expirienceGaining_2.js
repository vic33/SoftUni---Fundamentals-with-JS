function expirienceGaining(input) {
    let yellowGold = Number(input.shift())
    let whiteGold = Number(input.shift())
    let sum = 0;
    let sumNeeded = 0;
    let pairOfEarrings = yellowGold + whiteGold;
    
    // if (pairOfEarrings >= 10) {
        
        if (pairOfEarrings === 10) {
          sum +=1
          console.log(`Great success, you created ${sum} earrings.`);
        } else if (pairOfEarrings > 10) {
            sum = pairOfEarrings - 10;
            console.log(`Great success, you created ${sum} earrings.`);
    // } else {
        } else if (pairOfEarrings < 10) {
            sum = 10 - pairOfEarrings;
            sumNeeded = 10 - pairOfEarrings;
        console.log(`Keep trying, you need ${sumNeeded} more earrings.`);
    }
}


expirienceGaining(['5 3 2 2 4', 
'5 5 8 2 6']) 


expirienceGaining(['2 7 8 5 1 6 1 7 5',
'8 3 2 7 9 4 9 2 3'])