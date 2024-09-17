import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EducationComponent {
  events: Array<any>;

  constructor(private translate: TranslateService) {
    this.events = new Array();
    this.loadEvents();

    // Sottoscrivi agli eventi di cambio lingua
    this.translate.onLangChange.subscribe(() => {
      this.loadEvents();
    });
  }

  loadEvents() {
    this.translate.get(['EDU.MASTER', 'EDU.BACHELOR', 'EDU.HIGH_SCHOOL', 'EDU.PRESENT']).subscribe(translations => {
      this.events = [
        {
          startYear: '2022',
          endYear: translations['EDU.PRESENT'],
          title: translations['EDU.MASTER'],
          location: 'Politecnico di Torino',
          description: '',
          logo: 'Logo_PoliTo.png',
          color: '#5C3D3Fff',
          icon: 'pi pi-spinner-dotted'
        },
        {
          startYear: '2019',
          endYear: '2022',
          title: translations['EDU.BACHELOR'],
          location: 'Politecnico di Torino',
          description: '',
          logo: 'Logo_PoliTo.png',
          color: '#FA8993ff',
          icon: 'pi pi-check',
          grade: '96/110'
        },
        {
          startYear: '2014',
          endYear: '2019',
          title: translations['EDU.HIGH_SCHOOL'],
          location: 'Liceo Scientifico Statale A. Volta',
          description: '',
          logo: '',
          color: '#FA8993ff',
          icon: 'pi pi-check',
          grade: '90/100'
        }
      ];
    });
  }
}