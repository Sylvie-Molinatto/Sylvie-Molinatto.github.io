import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutMeComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent},
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

export default routes;
