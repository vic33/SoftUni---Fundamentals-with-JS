function gladiatorInventory(inventoryCommand) {
    let inventory = inventoryCommand.shift().split(' ');
    let buyCommand = 0;
    for (let el of inventoryCommand) {
        let element = el.split(' ');
        let elementCommand = element.shift();
        element = element.join('');
        elementCommand === 'Buy' ? buy() :
            elementCommand === 'Trash' ? trash() :
                elementCommand === 'Repair' ? repair() :
                    elementCommand === 'Upgrade' ? upgrade() : null;

        function buy() {
            if (!inventory.includes(element)) {
                inventory.push(element);
            }
        }
        function trash() {
            if (inventory.includes(element)) {
                let toTrash = inventory.indexOf(element)
                inventory.splice(toTrash, 1);
            }
        }
        function repair() {
            if (inventory.includes(element)) {
                let elIndex = inventory.indexOf(element)
                let fixing = inventory.splice(elIndex, 1).join('')
                inventory.push(fixing);
            }
        }
        function upgrade() {
            let elCheck = element
            let elPart = elCheck.split('-');
            if (inventory.includes(elPart[0])) {
                let upgradeIndex = inventory.indexOf(elPart[0])
                let output = `${elPart[0]}:${elPart[1]}`
                inventory.splice(upgradeIndex + 1, 0, output);
            }
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])