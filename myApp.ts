let todayYear = new Date();
let year = todayYear.getFullYear();

const getAge = (age: number) => {
    return year - age;
};
const nameAge = (user): any => {
    return (`I'm ${user.name}! I'm ${getAge(user.birth)} y. o. `)
};

let user1: {name: string, birth: number} = {
    name: 'Max',
    birth: 1996,
};

let user2: {name: string, birth: number} = {
    name: 'Anna',
    birth: 2001
};

let user3: {name: string, birth: number} = {
    name: 'John',
    birth: 1989
};

let user4: {name: string, birth: number} = {
    name: 'Emma',
    birth: 1994
};

console.log(nameAge(user1));
console.log(nameAge(user2));
console.log(nameAge(user3));
console.log(nameAge(user4));

let newObject: {name: string, wheels: 4, abilityToStart: boolean, passengers: string[], carsBaggage: {DedPanas: string, SvekruhaLuba: string, ZitMykola: string}, levelOfLoud: string, windowOpen: boolean} = {
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