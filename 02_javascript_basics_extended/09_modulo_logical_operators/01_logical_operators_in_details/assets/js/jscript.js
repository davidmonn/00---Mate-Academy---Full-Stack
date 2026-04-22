console.log(
    5 && 5,
    5 && 3,
    3 && 5,
    3 && 3
);

// function and(a,b) {
//     return a && b;
// }

function and(a,b) {
    if(a) {
        return a;
    } else {
        return b;
    }
}

console.log(
    and(5, 5),
    and(5, 3),
    and(3, 5),
    and(3, 3),
)

