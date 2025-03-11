import { taskUI } from "./taskUI";

let taskList = [
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

  const addTaskToList = (task) => {
    console.log("task list before adding:", taskList);
    const newArr = [...taskList, task];
    console.log("task added to list:", newArr);

    return newArr;
  };

 const getTasklist = () => taskList;
  

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

      taskList = addTaskToList(newTask);
      display.displayTasks(taskList);

      clearForm(e);
    });

  return {
    createTask,
    addTaskToList,
    handleFormSubmit,
    clearForm,
    taskList,
    getTasklist,
  };
};
