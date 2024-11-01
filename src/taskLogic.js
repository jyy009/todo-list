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
}

export class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
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

export let projectsList = [new Project("default project")];
let currentProject = projectsList[0];
console.log(currentProject);

export const addProject = (name) => {
  const newProject = new Project(name);
  projectsList.push(newProject);
  return newProject;
};

export const addTaskToProject = (task, projectId) => {
  const project = projectsList.find((proj) => proj.id === projectId);
  project.addTask(task);
};

export const addTaskToList = (newTask) => {
  taskList.push(newTask);
  console.log(taskList);
};

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
  dashSection.innerHTML = ""
  taskList.forEach(renderSingleTask)
}

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
