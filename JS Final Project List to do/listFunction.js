function addTask() {
    const taskInput = document.getElementById("task");
    const task = taskInput.value;

    if (task !== "") {
        const li = document.createElement("li");

        //  Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.onchange = () => {
            if (checkbox.checked) {
                li.classList.add("completed");
            } else {
                li.classList.remove("completed");
            }
        };

        //  Task text
        const span = document.createElement("span");
        span.textContent = task;

        //  Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = () => {
            li.remove();
        };

        //  Add elements to li
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);

        document.getElementById("taskContainer").appendChild(li);

        taskInput.value = ""; // clear input
    }
}














