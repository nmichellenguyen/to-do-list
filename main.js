let masterTodoList = ["Pay Bills", "Go Shopping"];

let addTodotask = document.getElementById("new-task"); //Add a new task.
let addButton = document.getElementsByTagName("button")[0]; //Add button
addButton.addEventListener("click", addTask);


// let DoneList = [];
let incompleteTasks = document.getElementById("incomplete-tasks"); //incomplete-tasks
incompleteTasks.addEventListener("change", movetoComplete);

let completeTasks = document.getElementById("completed-tasks"); //completed-tasks


function addTask() {
    // console.log("hello");
    masterTodoList.push(addTodotask.value);
    addTodotask.value = " ";
    render();
    // console.log("pushing: " + addTodotask.value);

}

function movetoComplete() {

    masterTodoList.splice(masterTodoList.indexOf());
    render();
}


function render() {
    // Draw my TodoList
    // Some string like:
    // let fakeOutput = "<li> My first thing to do </li> <li> My second thing to do</li>";
    let todoOutput = masterTodoList.map(todos => `<li>${todos} <input type="checkbox"> </li>`).join(" ");
    incompleteTasks.innerHTML = todoOutput.toUpperCase();

}


// html += `<li>${masterTodoList[i]} <a href='#' onclick='remove(${i})'>x</a></li>\n`;

render();