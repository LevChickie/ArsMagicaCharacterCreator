import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CreateCharacterServiceService } from '../services/create-character-service.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

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
  }
  createCharacter(){
    this.createCharacterService.setAge(this.characterForm.value.age);
    this.updatePage();
  }
  updatePage(){
    this.characterForm.controls["name"].setValue("name");

    document.getElementById("characterName").innerText="Mana";//this.createCharacterService.getName();
    document.getElementById("characterAge").innerText=this.createCharacterService.getAge().toString();
    document.getElementById("characterIntelligence").innerText=this.createCharacterService.getIntelligence().toString();
    document.getElementById("characterPerception").innerText=this.createCharacterService.getPerception().toString();
    document.getElementById("characterStrength").innerText=this.createCharacterService.getStrength().toString();
    document.getElementById("characterStamina").innerText=this.createCharacterService.getStamina().toString();
    document.getElementById("characterCommunication").innerText=this.createCharacterService.getCommunication().toString();
    document.getElementById("characterPresence").innerText=this.createCharacterService.getPresence().toString();
    document.getElementById("characterDexterity").innerText=this.createCharacterService.getDexterity().toString();
    document.getElementById("characterQuickness").innerText=this.createCharacterService.getQuickness().toString();
    window.location.reload();
    }
  
}
