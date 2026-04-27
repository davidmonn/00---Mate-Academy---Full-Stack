const users = [
  {
    firstName: undefined,
    lastName: 'Holy',
    fullName: 'Jack Holy',
  },
  {
    lastName: 'Adams',
    fullName: 'Mike Adams',
  },
];

function restoreNames(users) {
    let result = '';
    
    for(const user in users) {
        if(users[user].firstName === '' || users[user].firstName === undefined) {
            result = users[user].fullName.split(" ")[0];
            users[user].firstName = result;
        }
    }    

    return users;

}

const testFunc = restoreNames(users);

console.log(testFunc);