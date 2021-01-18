import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterCreationGuideComponent } from './character-creation-guide/character-creation-guide.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {path: 'character', component:CharacterCreationGuideComponent},
  {path: 'introduction', component:IntroductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
