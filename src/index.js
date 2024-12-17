import "./styles.css";
import { taskLogic, taskList  } from "./taskLogic";
import { taskUI } from "./taskUI";

document.addEventListener("DOMContentLoaded", () => {
  const display = taskUI()
  display.initializeForm()
  display.displayTasks(taskList)

  const logic = taskLogic()
  logic.handleFormSubmit()
});
