const loginForm = document.getElementById("login-form");
//const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginBtnClick(){
    const username = loginInput.value;
    if(username ===""){
        alert("Please write your name");
    } else if(username.length>15){
        alert("Your name is too long.");
    }
}

loginButton.addEventListener("click", handleLoginBtnClick);