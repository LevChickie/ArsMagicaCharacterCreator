import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createdCharacter: Character;
  characterForm = this.formBuilder.group({
    name: '',
    age: '',
    intelligence:'',
    perception:'',
    strength:'',
    stamina:'',
    communication:'',
    presence:'',
    dexterity:'',
    quickness:''
  });
  constructor(    private formBuilder: FormBuilder    ) { }

  ngOnInit(): void {
  }
  createCharacter(){
    
  }
  
}
