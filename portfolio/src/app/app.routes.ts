import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import { CvComponent } from './cv/cv.component';
import { ContactComponent } from './contact/contact.component';
import { CommentComponent } from './comment/comment.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'project', component: ProjectComponent},
  { path: 'cv', component: CvComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'comment', component: CommentComponent}
];
