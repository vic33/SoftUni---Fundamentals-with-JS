function triangleOfnumbers(number){


    for (let i = 1; i <= number; i++) {
        
        let row = '';
        for (j = 1; j <= i; j++) {
            row += `${i} `;
        }
        console.log(row);
    }
    
}

triangleOfnumbers(3)