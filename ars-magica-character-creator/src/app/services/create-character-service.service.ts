import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterServiceService {
  character : Character;
  constructor() { }

  getCharacter(
    name:any,
  age:any,
  intelligence:any,
  perception:any,
  strength:any,
  stamina:any,
  communication:any,
  presence:any,
  dexterity:any,
  quickness:any,
  ){
    this.character.name=name;
    this.character.age=age;
    this.character.intelligence=intelligence;
    this.character.perception=perception;
    this.character.strength=strength;
    this.character.stamina=stamina;
    this.character.communication=communication;
    this.character.presence=presence;
    this.character.dexterity=dexterity;
    this.character.quickness=quickness;
    this.character.confidence=0;
    this.character.experiencePoint = 35+(age-5)*15;
    console.log(name+": "+age);
  }

}
