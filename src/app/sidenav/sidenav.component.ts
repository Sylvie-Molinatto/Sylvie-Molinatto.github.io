import { Component, EventEmitter, Input, Output, HostListener, OnDestroy, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, NgbDropdownModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnDestroy {
  @Input() selectedLanguage!: string;
  @Input() selectedTheme!: 'light' | 'dark';
  @Input() languageMap!: { [key: string]: string };
  @Input() selectLanguage!: (language: string) => void;
  @Input() getLanguageName!: () => string;
  @Input() toggleTheme!: () => void;
  @Input() isOpen = false;

  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {}

  ngOnDestroy(): void {
    this.onClose.emit();
  }

  public close(): void {
    this.isOpen = false;
    this.onClose.emit();
  }

  // HostListener to detect clicks outside the sidenav
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.isOpen && !this.elementRef.nativeElement.contains(event.target)) {
      this.close();
    }
  }
}
