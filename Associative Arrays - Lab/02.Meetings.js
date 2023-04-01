function meetings(meetArray) {
    let meeting = {};

    //creating object properties
    for (let el of meetArray) {
        let [day, name] = el.split(' ');
        
        //IF object has't element as key
        if (!meeting.hasOwnProperty(day)) {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        } 
        // IF there is
        else {
            console.log(`Conflict on ${day}!`);
        }
    }

    // Iterate the object elements and print 
    for (let meetDay in meeting) {
        console.log(`${meetDay} -> ${meeting[meetDay]}`);
    }
}
// meetings([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim'])

meetings([
    'Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])