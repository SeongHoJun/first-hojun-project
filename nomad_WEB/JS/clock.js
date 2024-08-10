const clock = document.querySelector("h2#clock");
//const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText= `${hours}:${minutes}:${seconds}`;
}
getClock(); //바로 시간을 보게하는 역할 (만약 없으면 00:00:00을 보여주고 시계작동)
setInterval(getClock, 1000);    //1000 ms 마다 getClock 발생