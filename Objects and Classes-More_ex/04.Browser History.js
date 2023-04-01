function browserHistory(input, commands) {
    let browserLog = input;
    for (let command of commands) {

        let action = command.split(' ').shift();
        let site = command.split(' ').slice(1).join(' ');
        //IF Close
        if (action === 'Close') {
            for (let opened of browserLog["Open Tabs"]) {
                if (opened === site) {
                    let index = browserLog["Open Tabs"].indexOf(opened);
                    browserLog["Open Tabs"].splice(index, 1);
                    browserLog["Recently Closed"].push(opened)
                    browserLog["Browser Logs"].push(command);
                    break;
                }
            }
        } // IF Open
        else if (action === 'Open') {
            browserLog["Open Tabs"].push(site);
            browserLog["Browser Logs"].push(command);
        }
        // IF Clear cash
        else if (action === 'Clear') {
            browserLog["Open Tabs"] = [];
            browserLog["Recently Closed"] = [];
            browserLog["Browser Logs"] = [];

        }
    }
    console.log(browserLog["Browser Name"]);
    console.log(`Open Tabs: ${browserLog["Open Tabs"].join(', ')}`);
    console.log(`Recently Closed: ${browserLog["Recently Closed"].join(', ')}`);
    console.log(`Browser Logs: ${browserLog["Browser Logs"].join(', ')}`);
}

browserHistory({
    "Browser Name": "Google Chrome",
    "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
    "Recently Closed": ["Yahoo", "Gmail"],
    "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail", "Close Gmail", "Open Facebook"]
},
    ["Close Facebook", "Open StackOverFlow", "Open Google"])