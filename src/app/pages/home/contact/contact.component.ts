import { Component } from '@angular/core';
import { ClientsComponent } from "../../../components/clients/clients.component";
import { ContactFormComponent } from "../../contact/contact-form/contact-form.component";

@Component({
  selector: 'app-home-contact',
  standalone: true,
  imports: [
    ClientsComponent,
    ContactFormComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class HomeContactComponent {

}
