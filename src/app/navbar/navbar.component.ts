import { Component } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedLanguage: string = 'gb';
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
}
