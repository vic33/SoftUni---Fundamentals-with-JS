function houseParty(mainArray) {
    let guestArray = [];
    for (let i = 0; i < mainArray.length; i++) {
        let guestCommand = mainArray[i].split(' ');
        newGuest = guestCommand.shift(''); //take guest name
        guestCommand.pop().split(''); // cutting string to 'IS' or 'NOT'
        guestCommand = guestCommand.slice(-1).join('');

        guestCommand === 'is' ? going() : guestCommand === 'not' ? notGoing() : null;

        function going() {
            for (let j = 0; j < guestArray.length; j++) {
                //check if there is the same name, if so skip it
                if (newGuest === guestArray[j]) {
                    console.log(`${newGuest} is already in the list!`);
                    return;
                }
            }                         // first name in array        // add next names
            guestArray.length === 0 ? guestArray.push(newGuest) : guestArray.push(newGuest);
        }

        function notGoing() {
            for (let j = 0; j < guestArray.length; j++) {
                //check if there is the same name, if so - remove it
                if (newGuest === guestArray[j]) {
                    guestArray.splice(j, 1);
                    return;
                }
            }
            console.log(`${newGuest} is not in the list!`)
        }
    }
    console.log(guestArray.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'])