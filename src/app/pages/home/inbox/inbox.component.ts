import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-inbox',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class HomeInboxComponent {}
