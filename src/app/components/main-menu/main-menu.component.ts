import { Component, HostBinding } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {
  @HostBinding('class') class = 'collapse navbar-collapse clearfix show';
  @HostBinding('id') id = 'pbmit-menu';

}
