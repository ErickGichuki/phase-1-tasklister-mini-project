document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskDescriptionInput = document.getElementById("new-task-description");
    const taskDescription = taskDescriptionInput.value.trim(); // Trim whitespace

    if(taskDescription === "") {
      alert("Please write something");
      return; // Exit the function early if input is empty
    }

    const taskItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'; // Use a delete emoji for the button text
    taskItem.textContent = taskDescription;
    taskItem.appendChild(deleteButton); // Append delete button to task item
    tasks.appendChild(taskItem);

    taskDescriptionInput.value = ""; // Clear input field after adding task

    deleteButton.addEventListener("click", () => {
      tasks.removeChild(taskItem);
    });
  });
});