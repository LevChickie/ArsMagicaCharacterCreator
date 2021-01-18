import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TitleComponent } from './title/title.component';
import { MagicFormsComponent } from './magic-forms/magic-forms.component';
import { CharacterTypesComponent } from './character-types/character-types.component';
import { MagiDescriptionComponent } from './magi-description/magi-description.component';
import { CharacterCreationGuideComponent } from './character-creation-guide/character-creation-guide.component';
import { MagicSystemComponent } from './magic-system/magic-system.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    TitleComponent,
    MagicFormsComponent,
    CharacterTypesComponent,
    MagiDescriptionComponent,
    CharacterCreationGuideComponent,
    MagicSystemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
