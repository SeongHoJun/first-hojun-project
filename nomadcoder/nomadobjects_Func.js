const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + ", nice to meet you");
    },
    points: 10,
    fat: false,
};
console.log(player);
player.lastName = "potato";
player.points = player.points + 15;
console.log(player);

function Hello(nameOfPerson, age){
    console.log("Hello my name is "+ nameOfPerson + " and I'm " + age);
}

Hello("nico", 10);
Hello("dal", 23);
Hello("lynn", 21);

function plus(a,b){
    console.log(a+b);
}

function divide(a,b){
    console.log(a/b);
}
plus(8,60);
divide(98, 20);

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nick");

