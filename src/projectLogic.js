import { taskUI } from "./taskUI";
import { taskLogic, taskList } from "./taskLogic";

export const projectLogic = () => {
  const logic = taskLogic();
  const display = taskUI();

  let projectList = [];

  const addProjectToList = (arr, proj) => {
    const newArr = [...arr, proj];
    console.log("project list", newArr);
    return newArr;
  };

  const filterTasksByProject = (arr, value) => {
    return arr.filter((item) => item.project === value);
  };

  const handleProjectSubmit = () => {
    const projectForm = document.getElementById("project-form");

    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const value = form.formProject.value;
      console.log("form value:", value);
      console.log("e target value:", form);

      const existingProject = projectList.find((proj) => proj === value);

      if (!existingProject) {
        projectList = addProjectToList(projectList, value);
      } else {
        return;
      }

      display.displayProjects(value);
      display.createProjectOptions(projectList);
      logic.clearForm(e);
    });
  };

  const handleProjClick = (value) => {
    const currentTaskList = logic.getTasklist();
    console.log("current task list:", currentTaskList);
    const filteredTasks = filterTasksByProject(currentTaskList, value);
    console.log("tasklist filtered by project", filteredTasks);
    display.displayFilteredProjects(filteredTasks)
  };

  return {
    projectList,
    handleProjectSubmit,
    // createProjectButton,
    filterTasksByProject,
    handleProjClick,
  };
};
