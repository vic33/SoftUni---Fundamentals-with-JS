function companyUsers(data) {
    // create empty object
    let companiesInfo = {};
    for (let line of data) {
        let [company, userID] = line.split(' -> ');
        // IF don't exist - create key
        if (!companiesInfo[company]) {
            companiesInfo[company] = []
        }
        // check for equal value
        if (!companiesInfo[company].includes(userID)) {
            companiesInfo[company].push(userID);
        }
    }
    //sort object keys a-b
    let sortedCompanies = Object.keys(companiesInfo).sort((a, b) => a.localeCompare(b));

    //print result by sorted keys
    for (let currentComp of sortedCompanies) {
        console.log(currentComp);
        for(let user of companiesInfo[currentComp]){
            console.log(`-- ${user}`); 
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);

// companyUsers([
//     'SoftUni -> AA12345',
//     'SoftUni -> CC12344',
//     'Lenovo -> XX23456',
//     'SoftUni -> AA12345',
//     'Movement -> DD11111'
//     ]);