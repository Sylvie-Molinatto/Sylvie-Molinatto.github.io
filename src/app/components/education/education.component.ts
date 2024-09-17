import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgIf],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
  selectedTheme: 'light' | 'dark' = 'light';
  events: Array<any>;
  private themeSubscription: Subscription | null = null;

  constructor(private translate: TranslateService, @Inject(ThemeService) private themeService: ThemeService) {
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
    this.translate.get(['EDU.MASTER', 'EDU.BACHELOR', 'EDU.HIGH_SCHOOL', 'EDU.PRESENT', 'EDU.BACHELOR_INFO', 'EDU.MASTER_INFO']).subscribe(translations => {
      this.events = [
        {
          startYear: '2022',
          endYear: translations['EDU.PRESENT'],
          title: translations['EDU.MASTER'],
          location: 'Politecnico di Torino',
          description: translations['EDU.MASTER_INFO'],
          logoBlack: 'polito.png',
          logoWhite: 'polito_white.png',
        },
        {
          startYear: '2019',
          endYear: '2022',
          title: translations['EDU.BACHELOR'],
          location: 'Politecnico di Torino',
          description: translations['EDU.BACHELOR_INFO'],
          logoBlack: 'polito.png',
          logoWhite: 'polito_white.png',
          grade: '96/110'
        },
        {
          startYear: '2014',
          endYear: '2019',
          title: translations['EDU.HIGH_SCHOOL'],
          location: 'Liceo Scientifico Statale A. Volta',
          logoBlack: 'volta.png',
          logoWhite: 'volta_white.png',
          grade: '90/100'
        }
      ];
    });
  }
}