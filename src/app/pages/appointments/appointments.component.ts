import { Component, OnInit } from '@angular/core';
import { TitleBarComponent } from '../../components/titlebar/title-bar.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [TitleBarComponent, ClientsComponent, ReactiveFormsModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css',
})
export class AppointmentsComponent {
  constructor(private fb: UntypedFormBuilder) {}

  bookingForm = this.fb.group({
    departmentId: ['', [Validators.required]],
    doctorId: ['', [Validators.required]],
    patientName: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.minLength(10)]],
    email: '',
    date: ['', [Validators.required]],
    notes: '',
  });

  onSubmit(formValue: any) {
    if (this.bookingForm?.valid) {
      console.log('bookingForm', formValue);
    }
  }
}
