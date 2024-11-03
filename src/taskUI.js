import {
  addTaskFromForm,
  addProjectToSelect,
  Project,
  renderTasks,
  addProjectFromForm,
  renderProject,
} from "./taskLogic";

export const taskUI = () => {
  renderTasks();
  const taskSection = document.querySelector("#task-section");
  const dashSection = document.querySelector("#dash-section");

  //display task view template
  const taskViewTemplate = document.getElementById("task-view-template");
  const clone = taskViewTemplate.content.cloneNode(true);

  taskSection.appendChild(clone);

  //display form template
  const taskFormTemplate = document.getElementById("task-form-template");
  const taskItemClone = taskFormTemplate.content.cloneNode(true);
  taskSection.appendChild(taskItemClone);

  const taskForm = document.querySelector("#task-form");
  taskForm.addEventListener("submit", addTaskFromForm);

  //display add project template
  const addProjTemplate = document.getElementById("add-project-template");
  const addProjectClone = addProjTemplate.content.cloneNode(true);
  dashSection.appendChild(addProjectClone);
  const projForm = document.querySelector("#project-form");
  projForm.addEventListener("submit", addProjectFromForm);

  //set default project
  const defaultProject = new Project("default proj");
  addProjectToSelect(defaultProject);

};
