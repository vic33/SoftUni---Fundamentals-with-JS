function stringManipulator(input){

    let string = input.shift();

    for(let line of input){
        let [ comand, char, replacement ] = line.split(' ');
        
        if(comand === 'Translate'){
            for(let i = 0; i < string.length; i++){
                let lastChar = string[i];
                if(lastChar === char){
                    string = string.replace(lastChar, replacement);
                }
            }
            console.log(string);
        } else if(comand === 'Includes'){
            if(string.includes(char)){
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if(comand === 'Start'){
            if(string.startsWith(char)){
                console.log(`True`);
            } else {
                console.log(`False`);
            }
        } else if(comand === 'Lowercase'){
            string = string.toLowerCase();
            console.log(string);
        } else if(comand === 'FindIndex'){
            let foundIndex = string.lastIndexOf(char);
            console.log(foundIndex);
        } else if(comand === 'Remove'){
        //    let removedString = string.substring(comand[1]);
        // //    case 'Remove':
        // //     let sub = text.substr(command[1], command[2]);
        // //     console.log(text.replace(sub, ''));
        // //     break;
        //    console.log(string.replace(removedString, ''));
        // const subString = string.substring(replacement[1], replacement[1] + replacement[2]);
        //     string = string.replace(subString, '');
        //     console.log(string);
            let removedString = Number(replacement[1]);
            let count = Number(replacement[2]);

                string = string.split("");
                string.splice(removedString, count);
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