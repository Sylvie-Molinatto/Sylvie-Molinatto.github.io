import { Component, Input, inject, TemplateRef } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { NgbOffcanvasModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, TranslateModule, RouterModule, NgbOffcanvasModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @Input() selectedLanguage!: string;
  @Input() selectedTheme!: 'light' | 'dark';
  @Input() languageMap!: { [key: string]: string };
  @Input() selectLanguage!: (language: string) => void;
  @Input() getLanguageName!: () => string;
  @Input() toggleTheme!: () => void;
  

  private offcanvasService = inject(NgbOffcanvas);
	closeResult = '';

	open(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title', position: 'end' });
	}
}