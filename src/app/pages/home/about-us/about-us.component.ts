import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-about-us',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class HomeAboutUsComponent {}
