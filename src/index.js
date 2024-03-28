document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e) =>{
    e.preventDefault();

    const taskDescriptionInput = document.getElementById("new-task-description");
    const taskDescription = taskDescriptionInput.value;
    
    createTask(taskDescription);
    taskDescriptionInput.value = "";

  });
  function createTask(description){
    console.log("Creating task:", description);
  }
});
