const h1 = document.querySelector(".hello:first-child h1")

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass)
    }   else{
        h1.classList.add(clickedClass);
    }
}
// h1.classList.toggle("clicked");  
//toggle은 h1의 classList에 clicked class가 있는지 확인해서, 
//만약 있다면 toggle이 clicked를 제거함. 만약 clicked가 존재하지 않는다면 toggle은 clicked을 classList에 추가함.
h1.addEventListener("click", handleTitleClick);