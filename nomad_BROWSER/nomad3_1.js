const title1 = document.getElementById("hello");

const title2 = document.getElementsByClassName("hello");

const title3 = document.getElementsByTagName("h1");

const title4 = document.querySelector(".hello h1");  //css seleector를 사용하여 class hello를 찾고, 그 안에 있는 h1을 가져옴

const title5 = document.querySelectorAll(".hello h1");

console.log(title1);
console.log(title2);
console.log(title3);
console.log(title4);
console.log(title5);