function heroRecruitment(input) {
    let heroes = {};
  
    while (input[0] !== "End") {
      let [command, heroName, spell] = input.shift().split(` `);
  
      if (command == "Enroll") {
        if (heroes.hasOwnProperty(heroName) == false) {
          heroes[heroName] = [];
        } else {
          console.log(`${heroName} is already enrolled.`);
        }
      }
      if (command === "Learn") {
        if (heroes.hasOwnProperty(heroName)) {
          if (heroes[heroName].includes(spell)) {
            console.log(`${heroName} has already learnt ${spell}.`);
          } else {
            heroes[heroName].push(spell);
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
      }
      if (command === "Unlearn") {
        if (heroes.hasOwnProperty(heroName)) {
          if (heroes[heroName].includes(spell) == false) {
            console.log(`${heroName} doesn't know ${spell}.`);
          } else {
            let findingHero = heroes[heroName].indexOf(spell);
            heroes[heroName].splice(findingHero, 1);
          }
        } else {
          console.log(`${heroName} doesn't exist.`);
        }
      }
    }
    console.log(`Heroes:`);
    for (let lastHero in heroes) {
      console.log(`== ${lastHero}: ${heroes[lastHero].join(`, `)}`);
    }
  }
//   heroRecruitment([
//     "Enroll Stefan",
//     "Enroll Peter",
//     "Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn John ItShouldNotWork",
//     "Unlearn George Dispel",
//     "Unlearn Stefan ItShouldWork",
//     "End",
//   ]);

heroRecruitment(["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"])

//   console.log(`---`);
//   heroRecruitment([
//     "Enroll Stefan",
//     "Learn Stefan ItShouldWork",
//     "Learn Stefan ItShouldWork",
//     "Unlearn Stefan NotFound",
//     "End",
//   ]);
//   console.log(`---`);
//   heroRecruitment([
//     "Enroll Stefan",
//     "Enroll Peter",
//     "Enroll John",
//     "Learn Stefan Spell",
//     "Learn Peter Dispel",
//     "End",
//   ]);