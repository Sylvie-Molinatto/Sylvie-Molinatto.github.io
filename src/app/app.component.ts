import { Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HomeComponent, FooterComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';
  selectedLanguage: string = 'gb';
  selectedTheme: 'light' | 'dark' = 'light';

  languageMap: { [key: string]: string } = {
    'gb': 'English',
    'it': 'Italiano'
  };

  constructor(@Inject(TranslateService) private readonly translate: TranslateService, @Inject(ThemeService) private readonly themeService: ThemeService) {
    this.translate.setDefaultLang(this.selectedLanguage);
    this.selectedTheme = this.themeService.getTheme();
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
    this.themeService.setTheme(this.selectedTheme);
  }
}