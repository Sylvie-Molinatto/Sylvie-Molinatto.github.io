import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedLanguage: string = 'gb';
  selectedTheme: 'light' | 'dark' = 'light';  
  languageMap: { [key: string]: string } = {
    'gb': 'English',
    'it': 'Italiano'
  };

  selectLanguage(language: string) {
    console.log('Selected language: ', language);
    this.selectedLanguage = language;
  }

  getLanguageName(): string {
    return this.languageMap[this.selectedLanguage];
  }

  toggleTheme() {
    this.selectedTheme = this.selectedTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', this.selectedTheme);
  }
}
