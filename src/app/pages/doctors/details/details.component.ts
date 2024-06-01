import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

import { TitleBarComponent } from '../../../components/titlebar/title-bar.component';

@Component({
  selector: 'app-doctors-details',
  standalone: true,
  imports: [TitleBarComponent, ReactiveFormsModule, NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DoctorsDetailsComponent {
  sendMessageForm: any;
  constructor(private fb: UntypedFormBuilder) {}

  ngOnInit() {
    this.createSendMessageForm();
  }

  createSendMessageForm() {
    this.sendMessageForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60),
        ],
      ],
      email: ['', Validators.email],
      mobile: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.maxLength(2000)]],
    });
  }

  onSubmit(form: any) {
    if (this.sendMessageForm.valid) {
      console.log(form);
    }
  }
}
