function addTask() {
    const taskInput = document.getElementById("task");
    const task = taskInput.value;

    if (task !== "") {
        const item = document.createElement("li");

        //  Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = () => {
            if (checkbox.checked) {
                item.classList.add("completed");
            } else {
                item.classList.remove("completed");
            }
            updateCounter();// afterr change on checkbox
        };

        //  Task text
        const span = document.createElement("span");
        span.textContent = task;

        //  Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="bi bi-trash3"></i>';
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            item.remove();
            updateCounter();//afterr delete task

        };

        //  Add elements to list
        item.appendChild(checkbox);
        item.appendChild(span);
        item.appendChild(deleteBtn);

        document.getElementById("taskContainer").appendChild(item);

        taskInput.value = ""; // clear input

          updateCounter();//afterrr click on add button

    }
}
 function updateCounter(){
    const allTasks= document.querySelectorAll("#taskContainer li");
    const completedTasks=document.querySelectorAll("#taskContainer li.completed");
 
    document.getElementById("completedCount").textContent = completedTasks.length;
    document.getElementById("uncompletedCount").textContent = allTasks.length - completedTasks.length;

 }













