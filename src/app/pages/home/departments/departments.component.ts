import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-departments',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.css'
})
export class HomeDepartmentsComponent {

}
