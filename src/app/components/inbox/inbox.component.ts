import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css',
})
export class InboxComponent {}
