import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterServiceService {
  character : Character;
  constructor() { 
    this.character = new Character()
  }

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
  GetAge():number{
    return this.character.age;
  }
  GetIntelligence():number{
    return this.character.intelligence;
  }  GetPerception():number{
    return this.character.perception;
  }  GetStrength():number{
    return this.character.strength;
  }  GetStamina():number{
    return this.character.stamina;
  }  GetCommunication():number{
    return this.character.communication;
  }  GetPresence():number{
    return this.character.presence;
  }  GetDexterity():number{
    return this.character.dexterity;
  }  GetQuickness():number{
    return this.character.quickness;
  }  GetName():string{
    return this.character.name;
  }  SetAge(age){
    this.character.age=age;
  }  SetIntelligence(intelligence:number){
    this.character.intelligence=intelligence;
  }
  SetPerception(perception:number){
    this.character.perception=perception;
  }
  SetStrength(strength:number){
    this.character.strength=strength;
  }
  SetStamina(stamina:number){
    this.character.stamina=stamina;
  }
  SetCommunication(communication:number){
    this.character.communication=communication;
  }
  SetPresence(presence:number){
    this.character.presence=presence;
  }
  SetDexterity(dexterity:number){
    this.character.dexterity=dexterity;
  }
  SetQuickness(quickness:number){
    this.character.quickness=quickness;
  }
  SetName(name:string){
    this.character.name=name;
  }
}
