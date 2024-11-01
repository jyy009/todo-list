import {
  addTaskFromForm,
  projectsList,
  displayProjects,
  taskList,
  renderTasks
} from "./taskLogic";

export const taskUI = () => {
  renderTasks()
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

  //display projects
  // const projectTemplate = document.getElementById("project-sidebar-template");
  // const projectClone = projectTemplate.content.cloneNode(true);
  // dashSection.appendChild(projectClone);


  //display tasks
renderTasks = () => {

}
};
