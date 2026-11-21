import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Zaid';

  tasks = signal<Task[]>([
    { id: 0, title: 'Apprendre Angular', dueDate: '2024-06-01', completed: true },
    { id: 1, title: 'Apprendre React', dueDate: '2024-06-02', completed: false },
    { id: 2, title: 'Apprendre Vue', dueDate: '2024-06-03', completed: false },
  ]);

  // Signal to count the number of tasks
  nbrTasks = computed(() => this.tasks().length);

  filtrerTasks() {
    return this.tasks.set(this.tasks().filter((task) => task.completed === true));
  }

  disabled: boolean = false;

  rename(): void {
    this.name = 'DEROUICHE Zaid';
  }
  deleteName(): void {
    this.name = '';
  }
}
