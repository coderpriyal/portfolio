import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateModule, 
    TranslateModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
