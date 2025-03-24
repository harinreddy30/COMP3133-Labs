import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { CommonModule } from "@angular/common";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, CommonModule],
  // template: "<h1>Hello World</h1>",
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  // styles:"h1{color:red}"
})
export class AppComponent {
  title = 'Angular Tutorial';
  college = "George Brown, Toronto"
  person_image = "https://randomuser.me/api/portraits/women/39.jpg"

  stud = {
    sid: 1,
    firstName: "Pritesh",
    lastName: "Patel",
    result: "PASS"
  }
  today: Date = new Date(2025, 2, 11)
  now = new Date()

  buttonClick():void {
    alert('Hello: ' + this.today)

  }
}
