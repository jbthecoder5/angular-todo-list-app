import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  tasks: Task[] = [
    new Task('Visiting Ann'),
    new Task('Go to the gym'),
    new Task('Call Dad'),
    new Task('Wash the dishes'),
    new Task('Shop for the party'),
  ];

  // adding a new array to the list
  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm(
      `Are you sure that you want to remove the following task? \n "${existingTask.title}"`
    );

    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }
}

class Task {
  constructor(public title: string) {}

  toggleIsDone() {
    this.isDone = !this.isDone;
  }

  public isDone = false;
}
