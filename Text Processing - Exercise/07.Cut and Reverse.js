function cutAndReverse(input) {
    let firstWord = input.split('').slice(0, input.length / 2).reverse().join('');
    let secondWord = input.split('').slice(input.length / 2).reverse().join('');
    console.log(firstWord);
    console.log(secondWord);
}
// cutAndReverse(
//     'tluciffiDsIsihTgnizamAoSsIsihT'
// );

cutAndReverse(
    'sihToDtnaCuoYteBIboJsihTtAdooGoSmI'
);