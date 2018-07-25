let todayYear = new Date();
let year = todayYear.getFullYear();
let user1 = {
    name: 'Max',
    birth: 1996,
    nameAge: function () {
        return (`I'm ${this.name}! I'm ${this.getAge()} y. o. `)
    },
    getAge: function () {
        return year - this.birth;
    }
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

user2.nameAge = user1.nameAge; user3.nameAge = user1.nameAge; user4.nameAge = user1.nameAge;
user2.getAge  = user1.getAge; user3.getAge = user1.getAge; user4.getAge = user1.getAge;
console.log(user1.nameAge());
console.log(user2.nameAge());
console.log(user3.nameAge());
console.log(user4.nameAge());