
function oddAndEvenSum(num) {
    let even = 0;
    let odd = 0;
    let toStr = num.toString();
    for (let i = 0; i < toStr.length; i++) {
        let current = Number(toStr[i]);
        current % 2 === 0 ? even += current : odd += current;
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435)