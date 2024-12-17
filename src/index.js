import "./styles.css";
import { taskLogic, taskList  } from "./taskLogic";
import { taskUI } from "./taskUI";
import { projectLogic } from "./projectLogic" 

document.addEventListener("DOMContentLoaded", () => {
  const display = taskUI()
  display.initializeForm()
  display.displayTasks(taskList)
  display.initializeProject()
  
  const logic = taskLogic()
  logic.handleFormSubmit()
  
  const projManager = projectLogic()
  projManager.handleProjectSubmit()
});
