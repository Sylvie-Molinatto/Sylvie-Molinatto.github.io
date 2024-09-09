import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedLanguage: string = 'gb';
  selectedTheme: 'light' | 'dark' = 'light';  
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  languageMap: { [key: string]: string } = {
    'gb': 'English',
    'it': 'Italiano'
  };

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
