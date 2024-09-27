import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedTheme: 'light' | 'dark' = 'light';
  events: Array<any>;
  private themeSubscription: Subscription | null = null;

  constructor(private readonly translate: TranslateService, @Inject(ThemeService) private readonly themeService: ThemeService) {
    this.events = new Array();
    this.loadEvents();

    // Sottoscrivi agli eventi di cambio lingua
    this.translate.onLangChange.subscribe(() => {
      this.loadEvents();
    });
  }

  ngOnInit() {
    // Sottoscrivi agli eventi di cambio tema
    this.themeSubscription = this.themeService.theme$.subscribe(theme => {
      this.selectedTheme = theme;
    });
  }

  ngOnDestroy() {
    // Annulla la sottoscrizione per evitare memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  loadEvents() {
    this.translate.get([
      'EDUCATION_SECTION.MASTER', 
      'EDUCATION_SECTION.BACHELOR', 
      'EDUCATION_SECTION.HIGH_SCHOOL', 
      'EDUCATION_SECTION.PRESENT', 
      'EDUCATION_SECTION.BACHELOR_INFO', 
      'EDUCATION_SECTION.MASTER_INFO'
    ]).subscribe(translations => {
      this.events = [
        {
          startYear: '2022',
          endYear: translations['EDUCATION_SECTION.PRESENT'],
          title: translations['EDUCATION_SECTION.MASTER'],
          location: 'Politecnico di Torino',
          description: translations['EDUCATION_SECTION.MASTER_INFO'],
          logoBlack: 'logos/polito.png',
          logoWhite: 'logos/polito_white.png',
        },
        {
          startYear: '2019',
          endYear: '2022',
          title: translations['EDUCATION_SECTION.BACHELOR'],
          location: 'Politecnico di Torino',
          description: translations['EDUCATION_SECTION.BACHELOR_INFO'],
          logoBlack: 'logos/polito.png',
          logoWhite: 'logos/polito_white.png',
          grade: '96/110'
        },
        {
          startYear: '2014',
          endYear: '2019',
          title: translations['EDUCATION_SECTION.HIGH_SCHOOL'],
          location: 'Liceo Scientifico Statale A. Volta',
          logoBlack: 'logos/volta.png',
          logoWhite: 'logos/volta_white.png',
          grade: '90/100'
        }
      ];
    });
  }
}