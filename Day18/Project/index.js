console.log("Project: TODO");

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");

//     const task = taskInput.value;

//     if (task.trim() === "") return;

//     const li = document.createElement("li");

//     li.innerText = task;

//     const completeBtn = document.createElement("button");
//     completeBtn.innerText = "✅";
//     completeBtn.style.marginLeft = "5px";
//     completeBtn.onclick = function () {
//         li.classList.toggle("completed");
//     };
//     li.appendChild(completeBtn);

//     const deleteBtn = document.createElement("button");
//     deleteBtn.innerText = "❌";
//     deleteBtn.style.marginLeft = "5px";
//     deleteBtn.onclick = function () {
//         li.remove();
//     };
//     li.appendChild(deleteBtn);

//     taskList.appendChild(li);

//     taskInput.value = "";
// }

// function filterTasks() {
//     // Implement the filter functionality
// }


function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  let task = taskInput.value;

  if (task.trim() === "") return;

  let inputMessage = document.createElement("li");
  inputMessage.setAttribute("data-task", task.toLowerCase());

  let textSpan = document.createElement("span");
  textSpan.innerText = task;

  // COMPLETE BUTTON
  let completeMessage = document.createElement("button");
  completeMessage.innerText = "cm";
  completeMessage.style.marginLeft = "5px";

  completeMessage.onclick = function () {
    inputMessage.classList.toggle("normal");
  };

  // EDIT BUTTON
  let editMessage = document.createElement("button");
  editMessage.innerText = "edit";
  editMessage.style.marginLeft = "5px";

  editMessage.onclick = function () {
    if (editMessage.innerText === "edit") {
      let editInput = document.createElement("input");
      editInput.type = "text";
      editInput.value = textSpan.innerText;

      inputMessage.replaceChild(editInput, textSpan);
      editMessage.innerText = "save";
    } else {
      let updatedText = inputMessage.querySelector("input").value;

      let newSpan = document.createElement("span");
      newSpan.innerText = updatedText;

      inputMessage.replaceChild(newSpan, inputMessage.querySelector("input"));
      inputMessage.setAttribute("data-task", updatedText.toLowerCase());

      textSpan = newSpan;
      editMessage.innerText = "edit";
    }
  };

  // DELETE BUTTON
  let deleteMessage = document.createElement("button");
  deleteMessage.innerText = "x";
  deleteMessage.style.marginLeft = "5px";

  deleteMessage.onclick = function () {
    inputMessage.remove();
  };

  inputMessage.appendChild(textSpan);
  inputMessage.appendChild(completeMessage);
  inputMessage.appendChild(editMessage);
  inputMessage.appendChild(deleteMessage);

  taskList.appendChild(inputMessage);

  taskInput.value = "";
}

function filterTasks(){
    console.log("meeee")

    const checkTask = document.getElementById("searchInput")
    let check = checkTask.value
    const list = document.querySelectorAll("#taskList li")

    list.forEach((list) => {

    list.style.display = list.innerText.toLowerCase().includes(check.toLowerCase())? "block" : "none"

    
    })


} 