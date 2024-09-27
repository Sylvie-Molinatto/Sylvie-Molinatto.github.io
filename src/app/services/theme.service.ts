import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeSubject = new BehaviorSubject<'light' | 'dark'>('light');
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: 'light' | 'dark') {
    this.themeSubject.next(theme);
  }

  getTheme() {
    return this.themeSubject.getValue();
  } 
}
