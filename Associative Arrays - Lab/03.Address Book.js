function addressBook(addressList) {
    //creating object
    let addressBook = {};

    // getting object properties. Replacing if exist
    for (let line of addressList) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    // sort object keys a-b
    let sortedAddressBook = Object.keys(addressBook).sort((a, b) => a.localeCompare(b));

    // print object properties by sorted order
    for (let el of sortedAddressBook) {
        console.log(`${el} -> ${addressBook[el]}`);
    }
}
// addressBook([
//     'Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd'])


addressBook([
    'Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])