// import { format } from "date-fns";

// import { Project } from "./projectLogic.js";

export class Task {
  constructor(title, description, dueDate, id, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.id = id;
    this.project = project;
  }

  setProject(project) {
    this.project = project;
  }

  getProject() {
    return this.project;
  }
}

export const addTaskToList = (newTask) => {
  taskList.push(newTask);
  console.log(taskList);
};

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }
}

export let taskList = [
  {
    title: "Walk the dogs",
    description: "don't forget the poop bags",
    dueDate: 10 - 31 - 2024,
    project: "",
  },
  {
    title: "groceries",
    description: "don't forget the poop bags",
    dueDate: 10 - 31 - 2024,
    project: "",
  },
].map((task) => {
  return new Task(
    task.title,
    task.description,
    task.dueDate,
    crypto.randomUUID(),
    task.project
  );
});

console.log("initial task list:", taskList);

export const resetTaskForm = () => {
  const taskInputs = document.querySelectorAll(".input");
  taskInputs.forEach((input) => (input.value = ""));
};

export const renderSingleTask = (newTask) => {
  const dashSection = document.querySelector("#dash-section");
  const taskDisplay = document.getElementById("task-display-template");
  const taskDisplayClone = taskDisplay.content.cloneNode(true);

  taskDisplayClone.querySelector(".task-title").textContent = newTask.title;
  taskDisplayClone.querySelector(".task-description").textContent =
    newTask.description;
  taskDisplayClone.querySelector(".task-due").textContent = newTask.dueDate;

  dashSection.appendChild(taskDisplayClone);
};

export const renderTasks = () => {
  const dashSection = document.querySelector("#dash-section");
  dashSection.innerHTML = "";
  taskList.forEach(renderSingleTask);
};

export const addTaskFromForm = (event) => {
  event.preventDefault();

  const form = event.target;
  const newTask = new Task(
    form.title.value,
    form.description.value,
    form.date.value,
    crypto.randomUUID(),
    form.project.value
  );

  addTaskToList(newTask);
  renderSingleTask(newTask);
  resetTaskForm();
};

export const renderProject = (newProject) => {
  const dashSection = document.querySelector("#dash-section");
  const projectTemplate = document.getElementById("project-sidebar-template");
  const projectClone = projectTemplate.content.cloneNode(true);
  projectClone.querySelector(".project-button").textContent = newProject.name;
  dashSection.appendChild(projectClone);
};
export const addProjectToSelect = (project) => {
  const selectElement = document.getElementById("project-select");

  const option = document.createElement("option");
  option.value = project.name;
  option.textContent = project.name;
  selectElement.appendChild(option);
};

export const addProjectFromForm = (event) => {
  event.preventDefault();

  const newProject = new Project(event.target.project.value);

  addProjectToSelect(newProject);
  renderProject(newProject);

  resetTaskForm();
};
