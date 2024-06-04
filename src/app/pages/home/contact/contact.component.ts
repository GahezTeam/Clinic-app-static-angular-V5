import { Component } from '@angular/core';
import { ClientsComponent } from "../../../components/clients/clients.component";

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [
    ClientsComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class HomeContactComponent {

}
