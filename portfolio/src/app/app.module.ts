import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateService } from '@ngx-translate/core';

// Import JSON translation files manually
import en from '../assets/i18n/en.json';
import hi from '../assets/i18n/hi.json';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  providers: [TranslateService]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    // Add languages
    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');

    // Set translations manually (no HTTP calls)
    translate.setTranslation('en', en);
    translate.setTranslation('hi', hi);

    // Load previously selected language
    const currentLanguage = localStorage.getItem('currentLanguage');
    translate.use(currentLanguage || 'en');
  }
}
