import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() selectedLanguage!: string;
  @Input() selectedTheme!: 'light' | 'dark';
  @Input() languageMap!: { [key: string]: string };
  @Input() selectLanguage!: (language: string) => void;
  @Input() getLanguageName!: () => string;
  @Input() toggleTheme!: () => void;
}