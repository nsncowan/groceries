
function printList(event) {
event.preventDefault();
const groceryList = document.querySelectorAll("thing").value;
console.log(groceryList);


/*
let item1 = document.getElementById("1stThing").value;
let item2 = document.getElementById("2ndThing").value;
let item3 = document.getElementById("3rdThing").value;
let item4 = document.getElementById("4thThing").value;
*/


let list = [];
list.push(groceryList);
console.log(list);
list = list.sort();
console.log(list);

}

window.addEventListener("load", function() {
  let form = document.getElementById("form");
  form.addEventListener("submit", printList);
})
