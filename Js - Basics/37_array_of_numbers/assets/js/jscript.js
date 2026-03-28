function createArray(N) {
    let numb = [];
    let cont = 0;

    if(N > 0) {
        for(let i = 0; i < N; i++) {
            cont++;
            numb.push(cont);
        }
    }
    return numb;
}

console.log(createArray(5))