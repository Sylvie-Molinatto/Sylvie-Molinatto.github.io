import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-website';
  selectedLanguage: string = 'gb';
  selectedTheme: 'light' | 'dark' = 'light';

  languageMap: { [key: string]: string } = {
    'gb': 'English',
    'it': 'Italiano'
  };

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  selectLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }

  getLanguageName(): string {
    return this.languageMap[this.selectedLanguage];
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
  }
}