import { taskUI } from "./taskUI";
import { taskLogic } from "./taskLogic";

export const projectLogic = () => {
  const logic = taskLogic();
  const display = taskUI();

  const projectList = ["test project"];

  const handleProjectSubmit = () => {
    const projectForm = document.getElementById("project-form");
   

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const value = form.formProject.value;

      logic.addTaskToList(projectList, value);
      display.displayProjects(value);
      logic.clearForm(e)
    });
  };
  return { projectList, handleProjectSubmit };
};
