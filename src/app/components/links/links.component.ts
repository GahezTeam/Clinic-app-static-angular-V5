import { Component, HostBinding, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
@HostBinding('class') class = 'main-menu navbar-expand-xl navbar-light';
  closePanel(){

  }

}
