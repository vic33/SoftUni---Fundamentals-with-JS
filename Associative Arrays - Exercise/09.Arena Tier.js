function arenaTier(data) {
    let warriors = {};
    pool();

    // all to object
    function pool() {
        for (let el of data) {

            // IF battle
            if (el.includes(' vs ')) {
                battle();
                continue;
            }

            let [gladiator, tech, skill] = el.split(' -> ');
            skill = Number(skill);

            //IF reach the end
            if (gladiator === 'Ave Cesar') {
                return compare();
            } else {
                // create gladiator
                train();
            }
            function battle() {
                let [one, two] = el.split(' vs ');
                let playerOne = warriors[one];
                let playerTwo = warriors[two];
                if (!playerOne || !playerTwo) { return; }; //IF some of players didn't exist
                let pOne = Object.entries(playerOne);
                let pTwo = Object.entries(playerTwo);
                let maxOne = 0;
                let maxTwo = 0;

                for (let [tech1, skill1] of pOne) {
                    for (let [tech2, skill2] of pTwo) {
                        if (tech1 === tech2) {
                            maxOne += skill1;
                            maxTwo += skill2;
                        }
                    }
                }
                if (maxOne > maxTwo) { //IF skill is higher
                    delete warriors[two];
                } else if (maxOne < maxTwo) {
                    delete warriors[one];
                }
                return;
            }

            function train() {
                if (!warriors[gladiator]) {  //IF gladiator didn't exist
                    warriors[gladiator] = {};
                    warriors[gladiator][tech] = skill;
                } else {
                    if (warriors[gladiator][tech] > skill) { //IF exist ,but the skill owned is lower than new one
                        // warriors[gladiator][tech] = skill;   // corrected
                    } else {
                        warriors[gladiator][tech] = skill; // IF new skill
                    }
                }
            }
        }
    }

    function compare() {

        let totalSkillName = []; //create array for sort by total skill or name
        // compare by total skill
        for (let el of Object.keys(warriors)) {
            let currentArray = []
            currentArray.push(el); //taking name
            let currentTotal = Array.from(Object.values(warriors[el])).reduce((el, x) => el + x); // total Skill
            currentArray.push(currentTotal); // taking total
            totalSkillName.push(currentArray);  // add to array current warrior name/skill
        }

        // sort by skill then by name
        totalSkillName.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

        for (let man of totalSkillName) {
            console.log(`${man[0]}: ${man[1]} skill`);

            // array for sorting skills
            let techSkill = [];
            Object.entries(warriors[man[0]]).forEach(tech => techSkill.push(tech));

            //sort skills by value then key if values are equal                                
            techSkill.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
            techSkill.forEach(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));   // print result
        }
    }
}
arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
])

// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
//     ])