function employees(nameArray){
    class Employees {
        constructor(name,nameLength){
            this.name = name
            this.nameLength = nameLength
        }
    }

    let employeesArray = [];
    for(let el of nameArray){
        let [name, nameLength] = [el, el.length];
        let current = new Employees(name, nameLength); 
        employeesArray.push(current)
    }
    employeesArray.forEach((person) => console.log(`Name: ${person.name} -- Personal Number: ${person.nameLength}`))
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])