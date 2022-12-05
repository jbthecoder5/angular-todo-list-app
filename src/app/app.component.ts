import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  tasks = [
    'Visiting Ann',
    'Call Dad',
    'Go to the gym',
    'Wash the dishes',
    'Shop for the party',
  ];

  // adding a new array to the list
  add(newTask: string) {
    this.tasks.push(newTask);
  }
}
