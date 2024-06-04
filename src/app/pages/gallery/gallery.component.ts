import { Component } from '@angular/core';
import { TitleBarComponent } from "../../components/titlebar/title-bar.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    TitleBarComponent,
    RouterLink
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

}
