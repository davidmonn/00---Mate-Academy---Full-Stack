let test = [1,2,3,4,5,6,7];

function voltaPar(par) {
    let val = [];
    // let result = 0;

    for(let i = 0; i < par.length; i++) {
        if(par[i] % 2 === 0) {
            // result = par[i];
            val.push(par[i]);
        }
    }
    return val;

}

console.log(voltaPar(test));

/**
let test = [1,2,3,4,5,6,7];

function voltaPar(par) {
    let val = [];

    for(let i = 0; i < par.length; i++) {
        if(par[i] % 2 === 0) {
            val.push(par[i]);
        }
    }
    return val;
}

console.log(voltaPar(test));

 */