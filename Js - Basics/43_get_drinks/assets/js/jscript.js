function getDrinks(numberOfGuests) {
    let drinks = 0;

    for(let ind = 1; ind <= numberOfGuests; ind++) {
        drinks += ind;
    }

    return drinks;
}

console.log(getDrinks(3));