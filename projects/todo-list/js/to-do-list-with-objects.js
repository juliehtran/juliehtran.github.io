// STATE
// stores things that the computer keeps track of
// this stores things to do
// a "thingToDo" has 1) a name and 2) a completion status
// example: myThingToDo = { name: "bathe my dog", complete: true }
// example: myOtherThingToDo = { name: "dry my dog", complete: false }

// previously we were only able to store name,
// so we just put them as a string, ["bathe my dog", "dry my dog"]
// but now each array element can hold some more info in him

// for example like this
// [  { label: "bathe my dog", complete: true },  { label: "dry my dog", complete: false }   ]
let thingsToDo = []

// toDoItem used to be "bathe my dog"
// now it is { label: "bathe my dog", complete: true }
function turnTodoItemIntoHTML(toDoItem) {
  if (toDoItem.complete) {
    cssClass = "complete"
  } else {
    cssClass = ""
  }
  // template literals
  // the onclick property executes the javascript when clicked
  // the javascript we want to execute is to call the onDeleteClicked function
  // and pass the toDoItem that was clicked.
  return `
    <li onclick="struck(this, '${toDoItem.label}')" class="${cssClass}">
      <span class="to-do-item">
        ${toDoItem.label}
        <i class="fas fa-times-circle delete hide" onclick="onDeleteClicked('${toDoItem.label}')"></i>
      </span>
    </li>
  `
  // notes------------------------------------------------------------------------------------
  // The back tick makes a template literal, which creates a string which is stored
  // into the function 'turnTodoItemIntoHTML'. Then it is passed into the
  // function below, "updateTodoList." The function contains an array method
  // called map, which creates a new array from results of calling func for every element.
}

// function which we can call at any time which will make the page update the todo list
function updateTodoList() {
  listOfHTML = thingsToDo.map(turnTodoItemIntoHTML)
  document.querySelector(`#todo-list-items`).innerHTML = listOfHTML.join(``)
  // update the html with the length of the array of list items
  writeNumberOfToDos()
}
//   call the function to update the todo list
updateTodoList()

// enter key listener
document.addEventListener(`keydown`, function(keypress) {
  //   when the key is pressed
  if (keypress.key === 'Enter') {
    //   get the value of the input
    inputValue = document.querySelector("#things-to-do").value
    document.querySelector("#things-to-do").value = "";

    //   add it to the array
    thingToDo = { label: inputValue, complete: false }
    thingsToDo.push(thingToDo)

    // update the html
    updateTodoList()
  }
})

// strikethrough list function
function struck(ele, toDoItem) {
  item = thingsToDo.find((item) => item.label === toDoItem)
  if (item) {
    item.complete = !item.complete
    updateTodoList()
  }
}


function writeNumberOfToDos() {
  // identify the length of the list array of things to do
  // identify where it will be written in html
  numberOfStrucks = document.querySelectorAll('.complete').length
  document.querySelector(".number-of-things-to-do").innerHTML= thingsToDo.length - numberOfStrucks
}

// delete button click listener
//   when the button is clicked
function onDeleteClicked(toDoItem) {
  //   get the todo item which is specified by the click
  //   delete the item from the list in the state
  // itemPosition = thingsToDo.indexOf(toDoItem)
  // thingsToDo.splice(itemPosition, 1)
  thingsToDo = thingsToDo.filter((item) => item.label != toDoItem)

  //   update the todo list HTML with our cute function
  updateTodoList()
}


// delete all button click listener
//   when the button is clicked
document.querySelector('#clear-all').addEventListener('click', clearList)

//   clear the array of thingsToDo, reassign it to be empty
function clearList() {

  thingsToDo = []

  //   update the todolist HTML again!!!!
  updateTodoList()
}
