import { Component, ViewChild } from '@angular/core';
import { TitleBarComponent } from '../../components/titlebar/title-bar.component';
import { InboxComponent } from '../../components/inbox/inbox.component';
import { ClientsComponent } from '../../components/clients/clients.component';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';

import { NgForOf } from '@angular/common';
import {
  GoogleMap,
  MapAdvancedMarker,
  MapInfoWindow,
  MapMarker,
} from '@angular/google-maps';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TitleBarComponent,
    InboxComponent,
    ClientsComponent,
    ReactiveFormsModule,
    NgForOf,
    GoogleMap,
    MapInfoWindow,
    MapAdvancedMarker,
    MapMarker,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  @ViewChild('marker') marker: MapMarker | undefined;
  markerInfoContent = 'marker info';
  options: google.maps.MapOptions = {
    center: { lat: 30.005493, lng: 31.477898 }, // Example coordinates (San Francisco)
    zoom: 10,
  };
  markers = [
    {
      position: { lat: 30.005493, lng: 31.477898 }, // Example coordinates (San Francisco)
      title: 'cairo',
      content: 'This is cairo!',
    },
    {
      position: { lat: 30.045916, lng: 31.224291 },
      title: 'cairo tower',
      content: 'This is cairo tower!',
    },
    {
      position: { lat: 29.97648, lng: 31.131302 },
      title: 'Giza Necropolis',
      content: 'This is Giza Necropolis!',
    },
  ];
  constructor(private fb: UntypedFormBuilder) {}
  openInfoWindow(marker: MapMarker | undefined) {
    this.markerInfoContent = marker?.getTitle() || 'No title';
    this.infoWindow?.open(marker);
  }
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    subject: '',
    message: ['', [Validators.required]],
  });

  onSubmit(value: any) {
    if (this.contactForm.valid) {
      console.log(value);
    }
  }
}
