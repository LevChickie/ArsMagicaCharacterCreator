import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TitleComponent } from './title/title.component';
import { MagicFormsComponent } from './magic-forms/magic-forms.component';
import { CharacterTypesComponent } from './character-types/character-types.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TitleComponent,
    MagicFormsComponent,
    CharacterTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
