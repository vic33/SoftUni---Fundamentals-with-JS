function inventory(data) { 
    let heroes = [];
    // make class
    class Hero {
        constructor(name, level, item) {
            this.name = name;
            this.level = level;
            this.item = item;
        }
    }

    // creating objects and add them to heroes array
    for (let heroStuff of data) {
        let heroData = heroStuff.split(' / ');
        let [heroName, heroLevel] = [heroData.shift(), Number(heroData.shift())]
        let person = new Hero(heroName, heroLevel, heroData);
        heroes.push(person);
    }

    //sort array by level property
    heroes.sort((a,b) => a.level - b.level);

    //print to console
    heroes.forEach((hero) => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        let stringed = hero.item;
        console.log(`items => ${stringed.join(', ')}`);
    });

}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])