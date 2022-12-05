import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
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
      `Are you sure that you want to remove the following task? \n "${existingTask}"`
    );

    if (userConfirmed) {
      this.tasks = this.tasks.filter((task) => task != existingTask);
    }
  }

  markAsDone(task: Task) {
    task.isDone = true;
  }
}

class Task {
  constructor(public title: string) {}

  public isDone = false;
}
