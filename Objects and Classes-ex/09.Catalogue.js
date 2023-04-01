function catalogue(inputData) {
    //make object
    let products = {};
    addTo();

    //ADD to object
    function addTo() {
        for (let el of inputData) {
            let [item, price] = el.split(' : ');
            products[item] = Number(price);
        }
    }

    //getting object keys to sort them a-b
    let itemSort = Object.keys(products);
    itemSort = itemSort.sort((a, b) => a.localeCompare(b));

    //preparing output for print
    let letterHolder = '';
    for (let key of itemSort) {
        let firstLetter = key.split('')[0];

        if (firstLetter === letterHolder) {
            console.log(`  ${key}: ${products[key]}`);
        } else {
            letterHolder = firstLetter;
            console.log(firstLetter);
            console.log(`  ${key}: ${products[key]}`);
        }
    }
}

catalogue([
    'Apricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])