let todayYear = new Date();
let year = todayYear.getFullYear();
 const getAge = (age) => {
    return year - age;
};
 const nameAge = (user) => {
    return (`I'm ${user.name}! I'm ${getAge(user.birth)} y. o. `)
};

let user1 = {
    name: 'Max',
    birth: 1996,
};

let user2 = {
    name: 'Anna',
    birth: 2001
};

let user3 = {
    name: 'John',
    birth: 1989
};

let user4 = {
    name: 'Emma',
    birth: 1994
};

console.log(nameAge(user1));
console.log(nameAge(user2));
console.log(nameAge(user3));
console.log(nameAge(user4));
