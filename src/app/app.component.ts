import { Component, Inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { LazyScriptService } from "./shared/lazy-script.service";
import { filter } from "rxjs";
import { DOCUMENT, NgIf, UpperCasePipe } from "@angular/common";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FooterComponent, HeaderComponent, RouterLink, UpperCasePipe],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'clinic-app-static-angular-V5';
  currentLang = 'ar';
  languages = ['ar', 'en'];

  constructor(
    private lazyScript: LazyScriptService,
    private router: Router,
    public translate: TranslateService,
    @Inject(DOCUMENT) private doc: Document,
  ) {
    translate.addLangs(['ar', 'en']);
    translate.setDefaultLang(this.currentLang);
  }

  ngOnInit() {
    // @ts-ignore
    localStorage.getItem('userLang') ? this.currentLang = localStorage.getItem('userLang') : this.currentLang = 'ar';
    if (this.currentLang == 'ar') {
      this.doc.body.dir = 'rtl';
      // @ts-ignore
      this.doc.getElementById('changeStyle').setAttribute('href', 'assets/styles.ar.css');
    } else {
      this.doc.body.dir = 'ltr';
      // @ts-ignore
      this.doc.getElementById('changeStyle').setAttribute('href', 'assets/styles.en.css');
    }
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.loadScripts());
  }

  changeLanguage() {
    const nextLangIndex =
      (this.languages.indexOf(this.currentLang) + 1) % this.languages.length;
    this.currentLang = this.languages[nextLangIndex];
    this.translate.use(this.currentLang);
    localStorage.setItem('userLang', this.currentLang);
  }


  private async loadScripts() {
    try {
      await this.lazyScript.loadScript('/assets/js/scripts.js');
    } catch (error) {
      console.error('Error loading scripts.js', error);
    }
  }
}
