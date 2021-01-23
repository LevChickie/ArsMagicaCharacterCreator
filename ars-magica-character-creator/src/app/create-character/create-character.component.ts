import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createdCharacter: Character;
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
  
  constructor(  /*  private formBuilder: FormBuilder */   ) { }

  ngOnInit(): void {
  }
  createCharacter(){
    this.createdCharacter.name = this.characterForm.controls["name"].value;
    this.createdCharacter.age = this.characterForm.controls["age"].value;
    this.createdCharacter.intelligence = this.characterForm.controls["intelligence"].value;
    this.createdCharacter.perception = this.characterForm.controls["perception"].value;
    this.createdCharacter.strength = this.characterForm.controls["strength"].value;
    this.createdCharacter.stamina = this.characterForm.controls["stamina"].value;
    this.createdCharacter.communication = this.characterForm.controls["communication"].value;
    this.createdCharacter.presence = this.characterForm.controls["presence"].value;
    this.createdCharacter.dexterity = this.characterForm.controls["dexterity"].value;
    this.createdCharacter.quickness = this.characterForm.controls["quickness"].value;
    this.createdCharacter.confidence=0;
    this.createdCharacter.experiencePoint = 35+(this.createdCharacter.age-5)*15;
    this.characterForm.controls["name"].setValue("Kész");
  }
  
}
