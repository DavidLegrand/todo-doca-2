export default class TaskModel {
  id;
  createdBy = 1;
  assignedTo = 1;

  constructor(obj = {}) {
    var defaults = {
      id: this.id,
      createdBy: this.createdBy,
      assignedTo: this.assignedTo,
      title: "",
      description: "",
      completed: false,
      created: new Date(),
      deadline: new Date(new Date().setDate(new Date().getDate() + 7)),
      priority: "Moyenne",
    };
    if (obj.created) {
      obj.created = new Date(obj.created);
    }
    if (obj.deadline) {
      obj.deadline = new Date(obj.deadline);
    }
    Object.assign(this, { ...defaults, ...obj });
  }

  getRemaining() {
    return Math.ceil(
      (this.deadline.getTime() - new Date().getTime()) / (1000 * 3600 * 24)
    );
  }

  getStatus() { return this.completed ? "Terminée" : this.priority }
  getCompleted() { return this.completed ? "Terminée" : "En cours" }
  getVariant() {
    if (this.completed)
      return 'light'
    else if (this.priority === "Basse")
      return 'success'
    else if (this.priority === "Haute")
      return 'danger'
    return 'warning'
  }
}
