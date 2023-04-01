function storeProvision(currentStock, orderedProducts) {
    //create object
    let products = {};
    
    // add items to object
    for(let i = 0; i < currentStock.length; i+=2){
        let item = currentStock[i]
        let qty = Number(currentStock[i + 1]);
        products[item] = qty;
    }

    //cycle trough ordered products
    for(let j = 0; j < orderedProducts.length; j+=2){
        let item = orderedProducts[j];
        let qty = Number(orderedProducts[j + 1]);

        // check if object contains product from orders
        if (!products.hasOwnProperty(item)) { 
            // add item to object
            products[item] = 0;
        }
        // IF item exist add quantity to it 
        products[item] += qty;
    }

    for(let product in products){
        console.log(`${product} -> ${products[product]}`);
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    )