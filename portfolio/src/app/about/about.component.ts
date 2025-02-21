import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarked, faBirthdayCake, faFemale, faEnvelope, faUserGraduate} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  faMapMarked = faMapMarked;
  faBirthdayCake = faBirthdayCake;
  faFemale = faFemale;
  faEnvelope = faEnvelope;
  faUserGraduate = faUserGraduate
  
}
