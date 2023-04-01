function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        let cur = arr[i].toString();
        ruc = cur.split('').reverse().join('');
        cur === ruc ? console.log(true) : console.log(false);
    }
}
palindromeIntegers([32, 2, 232, 1010])