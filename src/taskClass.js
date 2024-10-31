export class Task {
  constructor(title, description, dueDate, isPriority, isComplete, id) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.isPriority = isPriority;
    this.isComplete = isComplete;
    this.id = id;
  }
}