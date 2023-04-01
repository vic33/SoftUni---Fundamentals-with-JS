function sortAnArrayBy2Criteria(strArray) {
    //sort by first letter
    strArray.sort(function (a, b) { return a - b });  
   // (strArray.sort((a, b) => a.length - b.length);  // strArray.sort(function (a, b) { return a.length - b.length }); the same)

   //sort by string length and(or) case-insensitive
    strArray.sort((a, b) => a.length - b.length || a.localeCompare(b)).join('\n')


    console.log(strArray.join('\n'));
}
//sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
//sortAnArrayBy2Criteria(['test', 'Deny', 'omen', 'Default'])