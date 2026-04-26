const test = [
    {name: 'David', gender: 'Male', age: 28},
    {name: 'Suzana', gender: 'Female', age:24},
];

// function removeFemaleAges(people) {
  
//     for(user in people) {
//         if(people[user].gender === 'Female') {
//             delete people[user].gender;
//             delete people[user].age;
//         }
//     }

//     // return people;

// }

function removeFemaleAges(people) {
  
    for(const user of people) {
        if(user.gender === 'female') {
            delete user.age;
        }
    }

    // return people;

}



const testFunc = removeFemaleAges(test);
console.log(testFunc);