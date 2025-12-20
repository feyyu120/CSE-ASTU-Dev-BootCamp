let todo = 0;
let todo1 = 0;
function updateCount() {
  const count = document.querySelector("#count");
  const completed = document.querySelector("#completed");
  count.textContent = todo;
  completed.textContent = todo1;
}
const listHolder = document.getElementById("listholder");
const input = document.getElementById("input");
const addbtn = document.getElementById("addbtn");
const message = document.getElementById("message");
const clear = document.getElementById("clear");
const save = document.querySelector("#save");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    addbtn.style.display = "none";
  } else {
    addbtn.style.display = "inline-block";
  }
});

function addTask() {
  const text = input.value.trim();
  if (text === "") {
    alert("please enter the task");
    return;
  }

  const list = document.createElement("li");
  const btn = document.createElement("button");
  const btn1 = document.createElement("button");
  const editbtnt = document.createElement("button");

  btn.textContent = " delete";
  btn.classList.add("remove");
  btn1.textContent = "⚠️Complete";
  btn1.classList.add("complete");
  editbtnt.textContent = "edit";
  editbtnt.classList.add("edit");
  list.textContent = text;
  list.style.fontSize = "18px";
  list.appendChild(btn);
  list.appendChild(editbtnt);
  list.appendChild(btn1);

  listHolder.appendChild(list);
  message.textContent = "";
  clear.style.display = "inline-block";
  save.style.display = "inline-block";
  todo += 1;
  updateCount();
  input.value = "";
  addbtn.style.display = "none";
  btn.onclick = () => {
    list.remove();
    todo--;
    updateCount();
    if (listHolder.children.length === 0) {
      message.textContent = "There is no Task yet!";
      clear.style.display = "none";
      save.style.display = "none";
    }
  };
  btn1.onclick = () => {
    if (btn1.textContent === "Completed") {
      btn1.textContent = "⚠️Complete";
      btn1.style.backgroundColor = " rgba(41, 33, 152, 1)";
      todo1--;
      updateCount();
    } else {
      btn1.textContent = "Completed";
      btn1.style.backgroundColor = "green";
      todo1++;
      updateCount();
    }
  };
  editbtnt.onclick = () => {
    if (btn1.textContent === "Completed") {
      alert("The task already completed");
      return;
    }
    const newText = prompt("Edit your task:", list.firstChild.textContent);
    if (newText !== null) {
      list.firstChild.textContent = newText;
    }
  };
}

function Clear() {
  const sure = confirm("Are you sure  to clear these tasks?");
  if (!sure) {
    return;
  }

  if (listHolder.children.length === 0) {
    alert("There is no task to clear!");
    return;
  }
  listHolder.innerHTML = "";
  message.textContent = "There is no Task yet!";
  todo = 0;
  todo1 = 0;
  updateCount();
  clear.style.display = "none";
  save.style.display = "none";
  localStorage.removeItem("tasks");
}

save.addEventListener("click", () => {
  const tasks = [];
  const items = listHolder.getElementsByTagName("li");

  for (let i = 0; i < items.length; i++) {
    const completeBtn = items[i].querySelector(".complete");

    if (completeBtn.textContent === "Completed") {
      const taskText = items[i].firstChild.textContent;
      tasks.push(taskText);
    }
  }

  if (tasks.length === 0) {
    alert("No completed tasks to save!");
    return;
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  alert("Completed tasks saved!");
});
window.addEventListener("load", () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  savedTasks.forEach((task) => {
    input.value = task;
    addTask();

    const lastTask = listHolder.lastChild;
    lastTask.querySelector(".complete").click();
  });
});
