import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Zaid';
  tasks: any[] = [
    { id: 0, title: 'Apprendre Angular', date: '2024-06-01', completed: true },
    { id: 1, title: 'Apprendre React', date: '2024-06-02', completed: false },
    { id: 2, title: 'Apprendre Vue', date: '2024-06-03', completed: false },
  ];

  disabled: boolean = false;

  rename(): void {
    this.name = 'DEROUICHE Zaid';
  }
  deleteName(): void {
    this.name = '';
  }
}
