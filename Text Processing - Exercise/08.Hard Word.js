function hardWord(grandmasLetter) {
    let letter = [];
    for (let word of grandmasLetter[0].split(' ')) {
        if (word.includes('_')) {
            if (word[word.length - 1] === '.' || word[word.length - 1] === ',') {
                let char = word.slice(-1);
                word = word.slice(0, -1)
                word = grandmasLetter[1].filter(el => el.length === word.length).join('');
                word += char;
            } else {
                word = grandmasLetter[1].filter(el => el.length === word.length).join('');
            }
            letter.push(word);
        } else {
            letter.push(word);
        }
    }
    console.log(letter.join(' '));
}
hardWord(
    ['Hi, grandma! I\'m so ____, to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
        ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);