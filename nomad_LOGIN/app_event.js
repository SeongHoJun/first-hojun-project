const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.log(event); 
    alert("clicked!");
}

link.addEventListener("click", handleLinkClick);
//addEventListner 안에 있는 함수는 직접 실행하지 않는다는 것이 중요함(내가 하는게 아니라 브라우저가 함수를 실행함)