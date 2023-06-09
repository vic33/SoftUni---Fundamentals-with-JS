function comments(input) {
    // copy input 
    let data = input.slice();
    let users = [];
    let articles = {};

    for (let line of data) {
        //depends of line conditions
        // collect users to array
        if (line.includes('user')) {
            let user = line.split(' ')[1];
            if (!users.includes(user)) {
                users.push(user);
            }
        }
        // create object by articles
        else if (line.includes('article')) {
            let article = line.split(' ')[1];
            if (!articles[article]) {
                articles[article] = [];
            }
        }
        // filter posts and collect them if they are property of articles
        else if (line.includes('posts')) {
            let current = line.split(' posts on ');
            //separate user, title and content from line
            let user = current.shift();
            current = current.join('').split(': ');
            let article = current.shift();
            current = current.join('').split(', ');
            let title = current[0];
            let content = current[1];
            //check if there is "User" in user array and also object has own article
            if (users.includes(user) && articles[article]) {
                // collect line data as article value
                articles[article].push([user, title, content]);
            }
        }
    }

    //sort object by entries count descending
    let sorted = Object.entries(articles).sort((a, b) => b[1].length - a[1].length);
    //iterate sorted object
    for (let el of sorted) {
        // sort result ascending by user name
        let currentSort = el[1].sort((a, b) => a[0].localeCompare(b[0]));
        //print  article
        console.log(`Comments on ${el[0]}`);
        for (let part of currentSort) {
            let [user, title, content] = [...part];
            //print expected output
            console.log(`--- From user ${user}: ${title} - ${content}`);
        }
    }
}
comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);

// comments([
//     'user Mark',
//     'Mark posts on someArticle: NoTitle, stupidComment',
//     'article Bobby',
//     'article Steven',
//     'user Liam',
//     'user Henry',
//     'Mark posts on Bobby: Is, I do really like them',
//     'Mark posts on Steven: title, Run',
//     'someUser posts on Movies: Like'
// ])