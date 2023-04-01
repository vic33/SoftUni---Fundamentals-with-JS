function legendaryFarming(line) {

    const allItems = {};
    allItems.legendary = {
        shards: 0,
        fragments: 0,
        motes: 0,
    };
    allItems.junk = {};
    let lineItems = line.split(' ');
    let lineLength = lineItems.length;
    let currentLegendary = allItems.legendary;
    let theLegendary = '';
    startCollecting();
    //print the legendary when done
    console.log(`${theLegendary} obtained!`);
    sorting();

    function startCollecting() {
        for (let i = 0; i < lineLength; i += 2) {
            let qty = Number(lineItems[i]);
            let thing = lineItems[i + 1].toLowerCase();  //convert to lower case to ensure checking

            //collecting legendary
            if (thing === 'shards' || thing === 'fragments' || thing === 'motes') {  
                //start collecting items to Object and adding quantity
                if (thing === 'shards') {
                    currentLegendary.shards += qty;
                    if (currentLegendary.shards >= 250) {
                        currentLegendary.shards -= 250
                        return theLegendary = 'Shadowmourne';
                    }
                }
                else if (thing === 'fragments') {
                    currentLegendary.fragments += qty;
                    if (currentLegendary.fragments >= 250) {
                        currentLegendary.fragments -= 250;
                        return theLegendary = 'Valanyr';
                    }
                }
                else if (thing === 'motes') {
                    currentLegendary.motes += qty;
                    if (currentLegendary.motes >= 250) {
                        currentLegendary.motes -= 250;
                        return theLegendary = 'Dragonwrath';
                    }
                }
            }
            //collecting junk
            else {
                //start collecting items to Object
                //IF didn't exist
                let currentJunk = allItems.junk;
                if (!currentJunk[thing]) {
                    currentJunk[thing] = qty;
                }
                //IF exist
                else {
                    currentJunk[thing] += qty;
                }
            }
        }
    }
    function sorting() {
        let legendaryItems = []; // array for legendary items properties
        let junkItems = []; // array for junk items properties
        Object.entries(allItems.legendary).forEach(stuff => legendaryItems.push(stuff));
        Object.entries(allItems.junk).forEach(stuff => junkItems.push(stuff));
        //sort legendary first by quantity then alphabetical
        legendaryItems.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).map(x => x[0].toLowerCase());
        //sort junk alphabetical
        junkItems.sort((a, b) => a[0].localeCompare(b[0])).map(x => x[0].toLowerCase());
        //merge arrays
        legendaryItems = [...legendaryItems, ...junkItems];

        for (let [item, qty] of legendaryItems) {
            console.log(`${item}: ${qty}`);
        }
    }
}
// legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');