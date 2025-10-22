document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const list = document.getElementById("taskList");

    // Add Task
    addBtn.addEventListener("click", () => {
        const taskText = input.value.trim();
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        // Delete Button
        const delBtn = document.createElement("button");
        delBtn.textContent = "❌";
        delBtn.style.marginLeft = "10px";
        delBtn.style.background = "transparent";
        delBtn.style.border = "none";
        delBtn.style.cursor = "pointer";
        delBtn.style.fontSize = "16px";

        delBtn.addEventListener("click", () => {
            list.removeChild(li);
        });

        li.appendChild(delBtn);
        list.appendChild(li);

        input.value = "";
    });

    // Press Enter to Add
    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addBtn.click();
        }
    });
});
