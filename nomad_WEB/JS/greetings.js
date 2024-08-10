const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

function onLoginSubmit(event){
    event.preventDefault(); //브라우저가 기본동작(새로고침 되는거)을 실행하지 못하게 막아줌
    loginForm.classList.add(HIDDEN_CLASSNAME);  //form에 입력하면 form을 숨김
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = "Hello " + username;
    //greeting.innerText = `Hello ${username}`; 바로 윗코드와 동일한 역할 -----> `(물결표)
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //removeBtn.classList.remove(HIDDEN_CLASSNAME); 
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    //환영 메시지 보이게
    //removeBtn.classList.remove(HIDDEN_CLASSNAME);   //삭제버튼 보이게
}

/*function removeStorage() {
    localStorage.removeItem("username");
    window.location.reload();
    }*/
//코드 실행되는 부분

const savedUsername = localStorage.getItem(USERNAME_KEY);
//const removeBtn = document.querySelector(".remove_storage");
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}   else{
    paintGreetings(savedUsername);
}
//removeBtn.addEventListener("click", removeStorage);