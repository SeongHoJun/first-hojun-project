const h1 = document.querySelector(".hello:first-child h1")

console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color;
    let newColor;
    if(h1.style.color === "blue"){
        newColor = "white";
    } else{
        newColor="blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);