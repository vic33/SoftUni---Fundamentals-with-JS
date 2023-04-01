function magicCards(input){

    let allCards = input.shift().split(":");
    

    let newCards = [];
    for(let i = 0; i<input.length; i++){
        let [comand, cardName, index] = input[i].split(" ");
        
        if(comand === "Ready"){
            break;
        }

        switch(comand){
            case "Add":
                if(!newCards.includes(cardName) && allCards.includes(cardName)){
                    newCards.push(cardName);
                } else {
                    console.log("Card not found.");
                }
                break;
            case "Insert":
                index = Number(index);
                if(allCards.includes(cardName) && index >= 0 && index <= newCards.length){
                newCards.splice(index,0,cardName);
                } else {
                    console.log("Error!");
                }
                break;
            case "Remove":
                if(newCards.includes(cardName)){
                    let indexCard = newCards.indexOf(cardName);
                    newCards.splice(indexCard,1)
                } else {
                    console.log("Card not found.");
                }
                break;
            case "Swap":
                let indexCard1 = newCards.indexOf(cardName);
                let indexCard2 = newCards.indexOf(index);
                if(indexCard1>=0 && indexCard1<=newCards.length && indexCard2>=0 && indexCard2<=newCards.length){
                    newCards.splice(indexCard2,1,newCards.splice(indexCard1,1,newCards[indexCard2])[0]);
                }
                break;
            case "Shuffle":
                newCards.reverse();
                break;
        }
    }

    console.log(newCards.join(" "));

}

magicCards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Bite",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Ready"])

console.log(`--------`);

magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"])

console.log(`--------`);

magicCards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
"Add BlackLotus",
"Insert Claw 1",
"Add Moonfire",
"Add Bite",
"Ready"])