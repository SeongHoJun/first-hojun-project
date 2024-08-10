const title = document.getElementById("title"); //JS에서 HTML element 가져오기(JS에서 getElementByID함수로 title이라는 항목을 가져오고 있음)

console.dir(title);

title.innerText="Got you!"; //JS에 의해 변경된 h1태그
console.log(title.id);
console.log(title.className);

//HTML에서 항목들을 가지고 와서, JS를 통해 항목을 변경하는 것!
