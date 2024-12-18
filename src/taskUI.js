import { taskLogic, taskList } from "./taskLogic";
import { projectLogic } from "./projectLogic";

export const taskUI = () => {
  const dashSection = document.querySelector("#dash-section");
  const taskSection = document.querySelector("#task-section");

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
      priority.textContent = task.priority;

      dashSection.appendChild(taskDisplayClone);
    });
  };

  //display project template
  const initializeProject = () => {
    const projectSection = document.getElementById("project-section");

    const projectTemplate = document.getElementById("project-template");
    const projectClone = projectTemplate.content.cloneNode(true);

    projectSection.appendChild(projectClone);
  };

  //display projects
  const displayProjects = (value) => {
    const projManager = projectLogic();
    const projectSection = document.getElementById("project-section");
    const button = document.createElement("button");
    button.classList.add("project-name");
    button.textContent = value;

    button.addEventListener("click", (e) => {
      e.preventDefault();
      // projManager.handleCategoryButtonClick();
    });
    projectSection.appendChild(button);
  };

  const createProjectOptions = (arr) => {
    arr.forEach((proj) => {
      const selectInput = document.getElementById("project-select");

      const existingOption = Array.from(selectInput.options).find(
        (option) => option.value === proj
      );

      if (!existingOption) {
        const optionElement = document.createElement("option");
        optionElement.classList.toggle("proj-option");
        optionElement.textContent = proj;
        selectInput.appendChild(optionElement);
      }
    });
  };
  // displayTasks(taskList)
  return {
    displayTasks,
    initializeForm,
    initializeProject,
    displayProjects,
    createProjectOptions,
  };
};
