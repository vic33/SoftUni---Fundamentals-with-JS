function bossRush(input) {
    let inputNumb = Number(input.shift());
    let accessGranted = /\|(?<name>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/;


    for (let i = 0; i < inputNumb; i++) {
                   let current = accessGranted.exec(input[i]);
                   
                   if (current == null) {
                                  console.log(`Access denied!`)
                                  continue;
                   } else {
                                  let name = current.groups.name;
                                  let title = current.groups.title;

                                  console.log(`${name}, The ${title}`);
                                  console.log(`>> Strength: ${name.length}`);
                                  console.log(`>> Armor: ${title.length}`);
                   }

    }

}
// bossRush(['3',
//                '|PETER|:#Lead architect#',
//                '|GEORGE|:#High Overseer#',
//                '|ALEX|:#Assistant Game Developer#']);

// console.log(`---------------------------`)
bossRush(['3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'])

// bossRush(['3',
// '|PETER|:#Lead architect#',
// '|GEORGE|:#High Overseer#',
// '|ALEX|:#Assistant Game Developer#'])

    // let valid = Object.entries(obj);
    // if (valid.length > 0) {
    //                for (let info of Object.entries(obj)) {
    //                               let [boss, title] = info;


    //                }
    // } else {

    // }