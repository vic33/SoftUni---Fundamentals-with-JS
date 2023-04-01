function distinctArray(arr) {
    let unique = new Set(arr)
    console.log(...unique);
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])