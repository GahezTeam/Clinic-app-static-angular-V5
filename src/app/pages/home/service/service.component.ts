import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-service',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
})
export class HomeServiceComponent {}
