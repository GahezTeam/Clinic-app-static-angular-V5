import { Component } from '@angular/core';
import { LinksComponent } from "../links/links.component";
import { RouterLink } from "@angular/router";
import { MainMenuComponent } from "../main-menu/main-menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LinksComponent,
    RouterLink,
    MainMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
