import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  message!: string;

  constructor(private fb: UntypedFormBuilder) {}

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    subject: '',
    message: ['', [Validators.required]],
  });

  onSubmit(value: any) {
    console.log(value);
  }
}
