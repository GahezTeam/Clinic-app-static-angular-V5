import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TitleBarComponent } from '../../components/titlebar/title-bar.component';
import { InboxComponent } from '../../components/inbox/inbox.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TitleBarComponent,
    InboxComponent,
    ClientsComponent,
    ReactiveFormsModule,
    ContactFormComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  ngOnInit() {}
}
