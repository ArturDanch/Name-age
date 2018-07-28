var todayYear = new Date();
var year = todayYear.getFullYear();
var getAge = function (age) {
    return year - age;
};
var nameAge = function (user) {
    return ("I'm " + user.name + "! I'm " + getAge(user.birth) + " y. o. ");
};
var user1 = {
    name: 'Max',
    birth: 1996
};
var user2 = {
    name: 'Anna',
    birth: 2001
};
var user3 = {
    name: 'John',
    birth: 1989
};
var user4 = {
    name: 'Emma',
    birth: 1994
};
console.log(nameAge(user1));
console.log(nameAge(user2));
console.log(nameAge(user3));
console.log(nameAge(user4));
var newObject = {
    name: 'Jiguli',
    wheels: 4,
    abilityToStart: true,
    passengers: ['Ded Panas', 'Svekruha Luba', 'Zit Mykola'],
    carsBaggage: {
        DedPanas: 'Vodka',
        SvekruhaLuba: 'Radeiko',
        ZitMykola: 'Zakuska'
    },
    levelOfLoud: 'High',
    windowOpen: true
};
