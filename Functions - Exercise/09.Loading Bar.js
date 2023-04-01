function loadingBar(num) {
    let [dot, percent, loadBar] = ['.', '%', '']
    let bar = dot.repeat(10).split('');

    for (let i = 1; i <= num / 10; i++) {
        bar.pop();
        bar.unshift(percent);
    }
    loadBar = bar.join('')
    num === 100 ?   console.log(`${num}% Complete!\n[${loadBar}]`) :
                    console.log(`${num}% [${loadBar}]\nStill loading...`);
}
loadingBar(10)