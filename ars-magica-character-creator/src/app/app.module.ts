import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { TitleComponent } from './title/title.component';
import { MagicFormsComponent } from './magic-forms/magic-forms.component';
import { CharacterTypesComponent } from './character-types/character-types.component';
import { MagiDescriptionComponent } from './magi-description/magi-description.component';
import { CharacterCreationGuideComponent } from './character-creation-guide/character-creation-guide.component';
import { MagicSystemComponent } from './magic-system/magic-system.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { SkillDescriptionsComponent } from './skill-descriptions/skill-descriptions.component';
import { VirtuesFlawsDescriptionsComponent } from './virtues-flaws-descriptions/virtues-flaws-descriptions.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CreateCharacterComponent,
    SkillDescriptionsComponent,
    VirtuesFlawsDescriptionsComponent,
    SkillListComponent,
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
