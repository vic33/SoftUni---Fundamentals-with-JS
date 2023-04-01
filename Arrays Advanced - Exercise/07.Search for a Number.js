function searchForANumber(mainArray, commandArray) {
    let modeArray = mainArray.slice(0, commandArray[0]);
    let counter = 0;
    modeArray.splice(0, commandArray[1]);
    let arrayLength = modeArray.length;
    for (let i = 0; i < arrayLength; i++) {
        let currentDig = modeArray[i];
        currentDig === commandArray[2]? counter++: null;
    }
    console.log(`Number ${commandArray[2]} occurs ${counter} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5])

