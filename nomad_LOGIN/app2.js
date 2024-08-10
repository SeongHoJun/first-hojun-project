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
    removeBtn.classList.remove(HIDDEN_CLASSNAME); 
}

//addEventListener 안에 있는 함수는 직접 실행하지 않는다
//브라우저가 실행시켜주고 브라우저에서 해당 이벤트에 대한 정보 즉, object를 가지게 된다.
//addEventListener의 함수에서 object에 대한 자리만 할당해주면 해당 이벤트가 발생시킨 정보들에 대한 object들을 볼 수 있다!
//이때 해당 이벤트가 가진 기본 Default값을 발생시키지 않기 하게 위해선 preventDefault를 이용하여 막을 수 있다!

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);    //환영 메시지 보이게
    removeBtn.classList.remove(HIDDEN_CLASSNAME);   //삭제버튼 보이게
}

function removeStorage() {
    localStorage.removeItem("username");
    window.location.reload();
    }
//코드 실행되는 부분

const savedUsername = localStorage.getItem(USERNAME_KEY);
const removeBtn = document.querySelector(".remove_storage");
if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}   else{
    paintGreetings(savedUsername);
}
removeBtn.addEventListener("click", removeStorage);