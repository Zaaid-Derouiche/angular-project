import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name: string = 'Zaid';

  disabled: boolean = false;

  rename(): void {
    this.name = 'DEROUICHE Zaid';
  }
  deleteName(): void {
    this.name = '';
  }
}
