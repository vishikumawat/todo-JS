// to render initial list
let todos = ["vivek"];
var todosList = document.getElementById("todos-list")

for (let i = 0; i < todos.length; i++) {
  const itemValue = todos[i];
  let listItem = createListItem(itemValue)
  todosList.appendChild(listItem);
  appendCloseToList(listItem)
}
//======

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// mark as completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// create a list item
function createListItem(value) {
  let listItem = document.createElement("LI");
  let text = document.createTextNode(value);
  listItem.appendChild(text);
  return listItem
}

// append close button and callback function to listItem
function appendCloseToList(listItem){
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem.appendChild(span);
  close = document.getElementsByClassName("close");

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// add new item to list
function addListItem(value){
  let listItem = createListItem(value)
  todosList.appendChild(listItem);
  appendCloseToList(listItem);
}

// handle input on click of save or press ennter
function handleInput(event){
  if(event.keyCode === 13 || event.target.className === "addBtn"){
    const inputValue = document.getElementById("newInput").value
    if(inputValue === "") {
      alert("you can't add empty TODO")
    }else{
      addListItem(inputValue)
      document.getElementById("newInput").value = ""
    }
  }
}
