import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, SkillsComponent],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

}
