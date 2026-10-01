const words = ['first', 'name', 'and', 'last', 'name'];

console.log(words);

console.log(
    words.includes('and'), // true
    words.includes('and', 3), // false
    words.includes('a'), // false 
);

console.log(
    words.indexOf('name'), // true
    words.indexOf('name', 3), // 4
);

console.log(
    words.lastIndexOf('name'), // 4
    words.lastIndexOf('name', 3), // 1
);
