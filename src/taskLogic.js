import { format } from "date-fns";
import { Task } from "./taskClass.js";

export const taskLogic = () => {

let taskList = [
  {
    title: "Walk the dogs",
    description: "don't forget the poop bags",
    dueDate: 10-31-2024,
    isPriority: false,
    isChecked: false,
  },
  {
    title: "groceries",
    description: "don't forget the poop bags",
    dueDate: 10-31-2024,
    isPriority: false,
    isChecked: false,
  }
]

taskList.map(task => new Task(task.title, task.description, task.dueDate, task.isPriority))
console.log("task list:", taskList)


const taskViewTemplate = document.getElementById("task-view-template")
const clone = taskViewTemplate.content.cloneNode(true)
const taskSection = document.querySelector("#task-section")
taskSection.appendChild(clone)


const taskItemTemplate = document.getElementById("task-item-template")
const taskItemClone = taskItemTemplate.content.cloneNode(true)
taskSection.appendChild(taskItemClone)

const addTaskToList = (title, description, dueDate, isPriority, isChecked) => {
  const newTask = new Task(title, description, dueDate, isPriority, isChecked)
  taskList.push(newTask)
  // console.log(newTask instanceof Task)
  console.log(taskList)
}

const taskForm = document.querySelector("#task-form")
taskForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = document.querySelector('input[name="task-title"]').value
  const description = document.querySelector('input[description="task-description"]').value
  const dueDate = document.querySelector('input[name="task-date"]').value
  const isPriority = document.querySelector('input[name="task-priority"]').checked
  const isComplete = document.querySelector('input[name="task-complete"]').checked
  
  addTaskToList(title, description, dueDate, isPriority, isComplete)
  
})

}