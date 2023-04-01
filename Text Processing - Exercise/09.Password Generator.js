function passwordGenerator(data) {
    let word = `${data[0]}${data[1]}`.toLowerCase();
    let thirdString = data[2].toUpperCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let i = 0;
    let password = '';

    for (let letter of word) {
        if (vowels.includes(letter)) {
            if (i === thirdString.length) { i = 0 };
            letter = thirdString[i++];
        }
        password += letter;
    }
    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);