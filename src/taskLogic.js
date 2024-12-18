import { taskUI } from "./taskUI";

export const taskList = [
  {
    title: "Walk dog",
    description: "Walk for an hour",
    due: new Date(),
    priority: false,
    project: "test project",
  },
  {
    title: "groceries",
    description: "don't forget breat",
    due: new Date(),
    priority: false,
    project: "test project",
  },
];

export const taskLogic = () => {
  const taskForm = document.querySelector("#task-form");

  const createTask = (title, description, due, priority, project) => {
    console.log("task created");
    return { title, description, due, priority, project };
  };

  taskList.map((task) =>
    createTask(
      task.title,
      task.description,
      task.due,
      task.priority,
      task.project
    )
  );

  const addTaskToList = (arr, task) => {
    arr.push(task);
    console.log("task added to list:", arr);
  };

  const clearForm = (e) => {
    e.target.reset();
  };

  const handleFormSubmit = () =>
    taskForm.addEventListener("submit", (e) => {
      const display = taskUI();
      e.preventDefault();
      const form = e.target;

      const title = form.title.value;
      const description = form.description.value;
      const due = form.date.value;
      const priority = form.priority.checked;
      const project = form.project.value;
      console.log("form values:", title, description, due, priority, project);

      const newTask = createTask(title, description, due, priority, project);

      addTaskToList(taskList, newTask);
      display.displayTasks(taskList);

      clearForm(e);
    });

  return { createTask, addTaskToList, taskList, handleFormSubmit, clearForm };
};
