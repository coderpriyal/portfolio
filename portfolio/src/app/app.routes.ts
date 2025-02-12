import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component'


export const routes: Routes = [
    { path: '', component: AppComponent }, 
    { path: 'header', component:HeaderComponent},
    { path: 'home', component:HomeComponent}
    
];
