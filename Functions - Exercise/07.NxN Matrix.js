function nxnMatrix(num) {
    let current = 0;
    while(current !== num){
        let print = `${num} `;
        console.log(print.repeat(num));
        current++;
    }
}
nxnMatrix(7)