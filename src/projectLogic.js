import { taskUI } from "./taskUI";
import { taskLogic } from "./taskLogic";

export const projectLogic = () => {
  const logic = taskLogic();
  const display = taskUI();

  const projectList = [];

  const handleCategoryButtonClick = (e) => {
    const projButton = e.target.closest(".project-name");
    if (projButton) {
      e.preventDefault();
      console.log(projButton.textContent);
    }
  };

  const setupProjectButtonListeners = () => {
    const projectSection = document.getElementById("project-section");

    projectSection.addEventListener("click",
      handleCategoryButtonClick);
    }
  

  const handleProjectSubmit = () => {
    const projectForm = document.getElementById("project-form");

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const value = form.formProject.value;

      const existingProject = projectList.find((proj) => proj === value);

      if (!existingProject) {
        logic.addTaskToList(projectList, value);
      } else {
        return;
      }

      display.displayProjects(value);
      display.createProjectOptions(projectList);
      logic.clearForm(e);
    });
  };

  return {
    projectList,
    handleProjectSubmit,
    handleCategoryButtonClick,
    setupProjectButtonListeners,
  };
};
