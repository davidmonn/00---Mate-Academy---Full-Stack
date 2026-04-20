function getTask(weekday) {
    switch(weekday) {
    case 'monday':
        return 'Write a new module for the program';
    case 'tuesday':
        return 'Test the module and find bugs';
    case 'wednesday':
        return 'Write a new module for the program';
    case 'thursday':
        return 'Test the module and find bugs';
    case 'friday':
        return 'You need to meet the boss today';
    case 'saturday':
        return 'Spend the evening with your friends';
    case 'sunday':
        return 'Go to the movies in the evening';
    default:
     return 'Entered the wrong day of the week'
    }
}

console.log(getTask('monday'));