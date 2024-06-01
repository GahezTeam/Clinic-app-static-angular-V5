import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, NgIf, NgForOf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  // settings!: Settings;
  // showAppointment: boolean;
  //
  // constructor(
  //   @Inject('SHOW_APPOINTMENT') appointment: boolean,
  //   private dataService: DataService,
  //   private settingsService: SettingsService,
  // ) {
  //   this.showAppointment = appointment;
  // }
  //
  // ngOnInit() {
  //   this.settingsService.settings$.subscribe((src) => {
  //     console.log('settings', src);
  //     this.settings = src;
  //   });
  // }
  //
  // get departments(): any[] {
  //   return this.dataService.departments.slice(0, 5);
  // }
  //
  // get contact(): any {
  //   return this.dataService.contact;
  // }
  //
  // // get workDayTimes(): any {
  // //   return this.dataService.workDayTimes;
  // // }
}
