import { taskLogic } from "./taskLogic";
import { projectLogic } from "./projectLogic";

export const taskUI = () => {
  const dashSection = document.querySelector("#dash-section");
  const taskSection = document.querySelector("#task-section");
  const projectSection = document.getElementById("project-section");

  //display form template
  const initializeForm = () => {
    taskSection.innerHTML = "";
    const taskFormTemplate = document.getElementById("task-form-template");
    const taskFormClone = taskFormTemplate.content.cloneNode(true);
    taskSection.appendChild(taskFormClone);
  };

  //display task template
  const displayTasks = (array) => {
    dashSection.textContent = "";

    array.forEach((task) => {
      const taskDisplay = document.getElementById("task-display-template");
      const taskDisplayClone = taskDisplay.content.cloneNode(true);

      const title = taskDisplayClone.querySelector(".task-title");
      title.textContent = task.title;

      const description = taskDisplayClone.querySelector(".task-description");
      description.textContent = task.description;

      const due = taskDisplayClone.querySelector(".task-due");
      due.textContent = task.due;

      const priority = taskDisplayClone.querySelector(".task-priority");
      task.priority ? priority.textContent = "Important" : priority.textContent = ""

      const remove = taskDisplayClone.querySelector(".task-delete");
      remove.addEventListener("click", (e) => {
        const task = e.target.closest(".task-wrapper");
        task.remove();
      });

      
      dashSection.appendChild(taskDisplayClone);
    });
  };

  // create button to delete task
  const removeTask = () => {
    const removeButton = document.querySelector("task-delete")

    removeButton.addEventListener("click", (e) => {
      const closestTask = e.target.closest("task-wrapper")
      closestTask.remove()
    })

  }

  //display project template
  const initializeProject = () => {
    const projectTemplate = document.getElementById("project-template");
    const projectClone = projectTemplate.content.cloneNode(true);

    projectSection.appendChild(projectClone);
  };

  //display projects
  const displayProjects = (value) => {
    const projManager = projectLogic();
    const button = document.createElement("button");
    button.classList.add(`project-button`);

    button.textContent = value;
    console.log(value);

    projectSection.appendChild(button);

    button.addEventListener("click", (e) => {
      e.preventDefault();
      projManager.handleProjClick(value);
    });
  };

  // display tasks by project
  const displayFilteredProjects = (array) => {

    const existingContainer = document.querySelector(
      ".filtered-task-container"
    );
    if (existingContainer) {
      existingContainer.remove();
    }
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("filtered-task-container");
  taskContainer.textContent = "";
    
    
    array.forEach((task) => {

      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");

      const title = document.createElement("p");
      title.textContent = task.title;

      const description = document.createElement("p");
      description.textContent = task.description;

      const due = document.createElement("p");
      due.textContent = task.due;


      const priority = document.createElement("p");
      priority.textContent = task.priority;

      taskCard.append(title, description, due, priority)
      taskContainer.appendChild(taskCard)
    });
  
    projectSection.appendChild(taskContainer);
  };

  // add project to dropdown menu
  const createProjectOptions = (arr) => {
    arr.forEach((proj) => {
      const selectInput = document.getElementById("project-select");

      const optionExists = Array.from(selectInput.options).find(
        (option) => option.value === proj
      );

      Array.from(selectInput.options).forEach((option) => {
        if (option.value !== "" && !option.disabled) {
          option.classList.add("proj-option");
        }
      });

      if (!optionExists) {
        const optionElement = document.createElement("option");
        optionElement.classList.add("proj-option");
        optionElement.textContent = proj;
        selectInput.appendChild(optionElement);
      }
    });
  };

  return {
    displayTasks,
    initializeForm,
    initializeProject,
    displayProjects,
    createProjectOptions,
    displayFilteredProjects,
  };
};
