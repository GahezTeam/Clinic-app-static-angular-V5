import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LazyScriptService } from "./shared/lazy-script.service";
import { filter } from "rxjs";
import { NgIf } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FooterComponent, HeaderComponent, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'clinic-app-static-angular-V5';


  constructor(
    private lazyScript: LazyScriptService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.loadScripts());
  }

  private async loadScripts() {
    try {
      await this.lazyScript.loadScript('/assets/js/scripts.js');
    } catch (error) {
      console.error('Error loading scripts.js', error);
    }
  }
}
