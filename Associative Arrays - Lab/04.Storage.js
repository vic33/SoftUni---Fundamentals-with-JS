function storage(items) {
    let map = new Map();

    for (let string of items) {
        let [product, quantity] = string.split(' ');
        quantity = Number(quantity);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }

    for (let el of map) {
        console.log(`${el[0]} -> ${el[1]}`);
    }
}
storage([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])