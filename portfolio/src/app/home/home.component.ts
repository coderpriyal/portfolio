import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    var options = {
      strings: ['','Full-Stack', 'WEB','Mobile'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }
}