import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'
import { SkillsComponent } from './skills/skills.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,HomeComponent,SkillsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  
}
