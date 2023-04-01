function build_aWall(wall) {
    let sum = 0;
    let concrete = 195;
    let expectedHeight = wall.length * 30;
    let currentHeight = wall.reduce((el, x) => el + x);
    let buff = [];
    let totalSum = 0;

    while (currentHeight < expectedHeight) {
        for (let i = 0; i < wall.length; i++) {
            if (wall[i] < 30) {
                wall[i]++;
                sum += concrete;
            }
        }
        buff.push(sum);
        totalSum += sum;
        sum = 0;
        currentHeight = wall.reduce((el, x) => el + x);
    }
    console.log(`${buff.join(', ')}\n${totalSum * 1900} pesos`);
}
build_aWall([17, 22, 17, 19, 17])