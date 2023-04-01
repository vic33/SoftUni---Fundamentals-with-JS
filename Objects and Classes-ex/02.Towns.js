function towns(inputData) {
 
    let theTown = {};

    for (let el of inputData) {
        let [town, latitude, longitude] = el.split(' | ');
        theTown.town = town;
        theTown.latitude = Number(latitude).toFixed(2);
        theTown.longitude = Number(longitude).toFixed(2);
        
        console.log(theTown);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)
