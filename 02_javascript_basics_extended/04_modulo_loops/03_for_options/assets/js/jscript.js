let i = 0;

for(;;) {
    if(i >= 3) {
        break;
    }
    console.log(i);
    console.log('OK');

     i++
}

// Dessa forma dara errada pois o i esta apenas dentro de nosso bloco;
console.log('--- FEITO ---', i);