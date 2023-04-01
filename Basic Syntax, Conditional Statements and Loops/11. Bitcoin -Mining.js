function bitcoinMining(array) {
    let daysCounter = 0;
    let totalGold = 0;
    let bitcoins = 0;
    let day = 0;
    let gram = 67.51;
    let totalPrice = 0;
    let firstDay = 0;
    for (let i = 0; i < array.length; i++) {
        day++;
        daysCounter++;
        totalGold = 0;
        if (day % 3 != 0) {
            totalGold += array[i];
        } else if (day % 3 == 0) {
            totalGold += array[i] * 0.7;
        }
        totalPrice = totalPrice + totalGold * gram;
 
        if (totalPrice >= 11949.16) {
            if (bitcoins == 0) {
                firstDay = daysCounter;
                while (totalPrice >= 11949.16) {
                    totalPrice -= 11949.16;
                    bitcoins++;
                }
            } else if (bitcoins >= 1) {
                while (totalPrice >= 11949.16) {
                    totalPrice -= 11949.16;
                    bitcoins++;
                }
            }
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins >= 1) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${totalPrice.toFixed(2)} lv.`);
}
bitcoinMining(50, 100)