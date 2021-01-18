import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCreationGuideComponent } from './character-creation-guide/character-creation-guide.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {path: '', redirectTo:'/introduction',pathMatch:'full'},
  {path: 'character', component:CharacterCreationGuideComponent},
  {path: 'introduction', component:IntroductionComponent},
  {path: 'create', component:CreateCharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
