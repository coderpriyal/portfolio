import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { CommentComponent } from './comment/comment.component';
@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HomeComponent,
    SkillsComponent,
    AboutComponent,
    ProjectComponent,
    CvComponent,
    ContactComponent,
    CommentComponent,  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  {
  title = 'portfolio';

 
}
