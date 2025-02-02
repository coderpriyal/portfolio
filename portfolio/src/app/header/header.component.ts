import { Component, HostListener } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideHeader: boolean = false;
  faBars = faBars;
  isSidebarOpen = false;
  toggleSidebar(event: MouseEvent) {
    // Stop event propagation to prevent the click from being caught by the document listener
    event.stopPropagation();
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Listen for clicks outside of the sidebar
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.getElementById('menuIcon');

    // Close the sidebar if the click is outside the sidebar and menu button
    if (sidebar && !sidebar.contains(event.target as Node) && menuButton !== event.target) {
      this.isSidebarOpen = false;
    }
  }
}