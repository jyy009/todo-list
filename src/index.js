import "./styles.css";
import { taskLogic, taskList } from "./taskLogic";
import { taskUI } from "./taskUI";
import { projectLogic } from "./projectLogic";

document.addEventListener("DOMContentLoaded", () => {
  const display = taskUI();
  display.initializeForm();
  display.initializeProject();
  display.displayTasks(taskList);

  const logic = taskLogic();
  logic.handleFormSubmit();

  const projManager = projectLogic();
  const { projectList } = projManager;
  projManager.handleProjectSubmit();
  projManager.setupProjectButtonListeners();
});
