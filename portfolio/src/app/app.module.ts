import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    TranslateService,
    TranslateModule
  ]
})
export class AppModule { 
  constructor(public translate: TranslateService){
    
  }
}
