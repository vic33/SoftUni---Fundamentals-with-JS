function stringManipulator(input) {
    let string = input.shift();
 
    while ((line = input.shift()) !== "End") {
       line = line.split(" ");
       let comand = line[0];
 
       if (comand === "Translate") {
          let char = line[1];
          let replacement = line[2];
          let count = new RegExp(char, "g");
 
          string = string.replace(count, replacement);
          console.log(string);
       } else if (comand === "Includes") {
          let findString = line[1];
 
          if (string.includes(findString)) {
             console.log("True");
          } else {
             console.log("False");
          }
       } else if (comand === "Start") {
          let startString = line[1];
 
          if (string.startsWith(startString)) {
             console.log("True");
          } else {
             console.log("False");
          }
       } else if (comand === "Lowercase") {
          string = string.toLowerCase();
 
          console.log(string);
       } else if (comand === "FindIndex") {
          let char = line[1];
 
          console.log(string.lastIndexOf(char));
       } else if (comand === "Remove") {
          let startChar = Number(line[1]);
          let count = Number(line[2]);
 
          string = string.split("");
          string.splice(startChar, count);
          string = string.join("");
          console.log(string);
       }
    }
 }



 stringManipulator (["//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"])

console.log(`----------`);

stringManipulator(["*S0ftUni is the B3St Plac3**",
"Translate 2 o",
"Includes best",
"Start the",
"Lowercase",
"FindIndex p",
"Remove 2 7",
"End"])