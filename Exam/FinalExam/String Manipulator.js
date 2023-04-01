
function stringManipulator(input) {
               let string = input.shift();


               while (input != 'End') {
                              let [command, ...tokens] = input.shift().split(' ');

                              if (command === 'Translate') {
                                             let [char, replacement] = tokens;
                                             let pattern = new RegExp(char, 'g');

                                             string = string.replace(pattern, replacement);
                                             console.log(string);

                              } else if (command === 'Includes') {
                                             let otherString = tokens;
                                             if (string.includes(otherString)) {
                                                            console.log(`True`);
                                             } else {
                                                            console.log(`False`);
                                             }
                              } else if (command === 'Start') {
                                             let otherString = tokens[0];
                                             let other = string.split(' ');
                                             let pop = '';

                                             for (let i = 0; i < other.length; i++) {
                                                            let current = other[i];
                                                            if (i === other.length - 1) {
                                                                           pop = current;
                                                            }
                                             }
                                             if (pop === otherString) {
                                                            console.log(`False`);
                                             } else {
                                                            console.log(`True`);
                                             }
                              } else if (command === 'Lowercase') {
                                             string = string.toLocaleLowerCase();
                                             console.log(string);
                              } else if (command === 'FindIndex') {
                                             let char = tokens[0];
                                             let index = string.indexOf(char);

                                             console.log(index);
                              } else if (command === 'Remove') {
                                             let [start, end] = tokens;
                                             start = Number(end);
                                             end = Number(start) + end;

                                             string = string.substring(end, start)
                                             console.log(string)
                              }


               }
}
// stringManipulator((["//Th1s 1s my str1ng!//",
//                "Change 1 i",
//                "Includes string",
//                "End my",
//                "Uppercase",
//                "FindIndex I",
//                "Cut 5 5",
//                "Done"]));
stringManipulator (["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])
