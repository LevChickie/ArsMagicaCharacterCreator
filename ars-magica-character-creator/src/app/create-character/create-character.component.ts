import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CreateCharacterServiceService } from '../services/create-character-service.service';
import {Skills} from '../mock/skill-list';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  skills: Skill[]= Skills;
  skillControl = new FormControl();
  skillValue:number;
  characterForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    intelligence:new FormControl(''),
    perception:new FormControl(''),
    strength:new FormControl(''),
    stamina:new FormControl(''),
    communication:new FormControl(''),
    presence:new FormControl(''),
    dexterity:new FormControl(''),
    quickness:new FormControl('')
  });
  
  constructor( private createCharacterService: CreateCharacterServiceService   ) { }

  ngOnInit(): void {
    this.createCharacterService.SetSkillList(this.skills);

  }
  createCharacter(){
    this.createCharacterService.SetAge(this.characterForm.value.age);
    this.createCharacterService.SetName(this.characterForm.value.name);
    this.createCharacterService.SetIntelligence(this.characterForm.value.intelligence);
    this.createCharacterService.SetPerception(this.characterForm.value.perception);
    this.createCharacterService.SetStrength(this.characterForm.value.strength);
    this.createCharacterService.SetStamina(this.characterForm.value.stamina);
    this.createCharacterService.SetCommunication(this.characterForm.value.communication);
    this.createCharacterService.SetPresence(this.characterForm.value.presence);
    this.createCharacterService.SetDexterity(this.characterForm.value.dexterity);
    this.createCharacterService.SetQuickness(this.characterForm.value.quickness);
    this.createCharacterService.CalculateExperience();
    this.createCharacterService.StartingConfidence();

    this.updatePage();

  }
  ImproveSkill(){

    this.createCharacterService.ImproveSkill(this.skillControl.value.name.toString(),this.skillValue);
  }
  updatePage(){
    document.getElementById("characterName").innerText=this.createCharacterService.GetName();
    document.getElementById("characterAge").innerText=this.createCharacterService.GetAge().toString();
    document.getElementById("characterIntelligence").innerText=this.createCharacterService.GetIntelligence().toString();
    document.getElementById("characterPerception").innerText=this.createCharacterService.GetPerception().toString();
    document.getElementById("characterStrength").innerText=this.createCharacterService.GetStrength().toString();
    document.getElementById("characterStamina").innerText=this.createCharacterService.GetStamina().toString();
    document.getElementById("characterCommunication").innerText=this.createCharacterService.GetCommunication().toString();
    document.getElementById("characterPresence").innerText=this.createCharacterService.GetPresence().toString();
    document.getElementById("characterDexterity").innerText=this.createCharacterService.GetDexterity().toString();
    document.getElementById("characterQuickness").innerText=this.createCharacterService.GetQuickness().toString();
    document.getElementById("characterExperience").innerText=this.createCharacterService.GetExperience().toString();
    document.getElementById("characterConfidence").innerText=this.createCharacterService.GetConfidence().toString();
    this.createCharacterService.GetSkillList();
  }
  
}
