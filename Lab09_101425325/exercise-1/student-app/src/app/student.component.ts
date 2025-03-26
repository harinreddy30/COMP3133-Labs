import { Component } from '@angular/core';

@Component({
  selector: 'students',
  template: `
    <h2>Students Component</h2>
    <h2>{{ getTitle() }}</h2>
    <h1>{{ getCurrentDate() }}</h1>

  `,
})
export class StudentsComponent {
  title = `My List of Students - ${this.getCurrentDate()}`;


  getTitle(){
    return this.title;
  }

  getCurrentDate(): string {
    const today = new Date();
    return today.toDateString();
  }
}
