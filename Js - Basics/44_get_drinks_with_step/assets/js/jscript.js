function getDrinksWithStep(numberOfGuests, step) {
    let drink = 0;
    
    for(let i = 1; i <= numberOfGuests; i += step) {
        drink += i;
    }
    return drink;
}

console.log(getDrinksWithStep(10, 3));