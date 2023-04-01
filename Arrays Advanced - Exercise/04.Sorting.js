function sorting(arrayToSort) {
    //sort array
    arrayToSort.sort(function (a, b) { return a - b });
    // cut array by half
    let max = arrayToSort.splice(- arrayToSort.length / 2);
    // reverse array  
    max.reverse();
    // index for max array element
    let j = 0;
                       // length of the original array
    for (let i = 0; i < max.length * 2; i++) {
        // add element only on even positions
        if (i % 2 === 0) {
            let current = max[j];
            arrayToSort.splice(i, 0, current);
            j++;
        }
    }
    console.log(arrayToSort.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])