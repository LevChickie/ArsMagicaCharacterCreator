import { Component, OnInit } from '@angular/core';
import { Character } from '../models/character';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  createdCharacter: Character;
  constructor() { }

  ngOnInit(): void {
  }
  createCharacter(){
    
  }
}
