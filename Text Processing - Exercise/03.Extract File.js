function extractFile(path) {
    let pathArray = path.split('\\');
    let filename = pathArray.pop().split('.');
    let extension = filename.pop();
    console.log(`File name: ${filename.join('.')}`);
    console.log(`File extension: ${extension}`);
}
extractFile(
    'C:\\Internal\\training-internal\\Template.back.pptx'
);