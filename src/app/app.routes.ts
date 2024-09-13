import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default routes;
