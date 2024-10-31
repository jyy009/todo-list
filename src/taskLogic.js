import { format } from "date-fns";
import { Task } from "./taskClass.js";
import { id } from "date-fns/locale";

export const taskLogic = () => {
  let taskList = [
    {
      title: "Walk the dogs",
      description: "don't forget the poop bags",
      dueDate: 10 - 31 - 2024,
      isPriority: false,
      isChecked: false,
    },
    {
      title: "groceries",
      description: "don't forget the poop bags",
      dueDate: 10 - 31 - 2024,
      isPriority: false,
      isChecked: false,
    },
  ];

  taskList.map(
    (task) =>
      new Task(
        task.title,
        task.description,
        task.dueDate,
        task.isPriority,
        task.id
      )
  );
  console.log("task list:", taskList);

  //display task view
  const taskViewTemplate = document.getElementById("task-view-template");
  const clone = taskViewTemplate.content.cloneNode(true);
  const taskSection = document.querySelector("#task-section");
  taskSection.appendChild(clone);

  //display task form
  const taskFormTemplate = document.getElementById("task-form-template");
  const taskItemClone = taskFormTemplate.content.cloneNode(true);
  taskSection.appendChild(taskItemClone);
  const taskForm = document.querySelector("#task-form");

  const addTaskToList = (newTask) => {
    // const newTask = new Task(title, description, dueDate, isPriority, isChecked, id)
    taskList.push(newTask);
    // console.log(newTask instanceof Task)
    console.log(taskList);
  };

  const resetTaskForm = () => {
    const taskInputs = document.querySelectorAll(".input");
    taskInputs.forEach((input) => (input.value = ""));
  };

  const addTaskFromForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const newTask = new Task(
      form.title.value,
      form.description.value,
      form.date.value,
      form.priority.checked,
      form.complete.checked,
      crypto.randomUUID()
    );

    addTaskToList(newTask);
    resetTaskForm();
  };

  // const taskForm = document.querySelector("#task-form")
  taskForm.addEventListener("submit", addTaskFromForm);
};
