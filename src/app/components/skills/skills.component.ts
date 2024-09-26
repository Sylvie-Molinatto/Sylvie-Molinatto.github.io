import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'React', image: 'skills/react.svg' },
    { name: 'Angular', image: 'skills/angular.png' },
    { name: 'Bootstrap', image: 'skills/bootstrap.svg' },
    { name: 'Jetpack Compose', image: 'skills/jetpack-compose.png' },
    { name: 'NodeJS', image: 'skills/nodejs.svg' },
    { name: 'JavaScript', image: 'skills/javascript.svg' },
    { name: 'TypeScript', image: 'skills/typescript.svg' },
    { name: 'Kotlin', image: 'skills/kotlin.png' },
    { name: 'Java', image: 'skills/java.svg' },
    { name: 'C', image: 'skills/c.svg' },
    { name: 'Rust', image: 'skills/rust.png' },
    { name: 'HTML', image: 'skills/html.svg' },
    { name: 'CSS', image: 'skills/css.svg' },
    { name: 'MongoDB', image: 'skills/mongoDB.svg' },
    { name: 'MySQL', image: 'skills/mysql.svg' },
    { name: 'Firebase', image: 'skills/firebase.svg' },
    { name: 'Git', image: 'skills/git.svg' },
    { name: 'Docker', image: 'skills/docker.svg' },
    { name: 'Figma', image: 'skills/figma.svg' },
  ];

}
