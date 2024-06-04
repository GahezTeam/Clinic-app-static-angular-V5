import { Component, HostBinding, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './links.component.html',
  styleUrl: './links.component.css'
})
export class LinksComponent {
@HostBinding('class') class = 'main-menu navbar-expand-xl navbar-light';
  closePanel(){

  }

}
