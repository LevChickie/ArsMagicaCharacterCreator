import { Injectable } from '@angular/core';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CreateCharacterServiceService {
  character : Character;
  constructor() { 
    this.character = new Character()
    this.character.confidence =0;
  }
  StartingConfidence(){
    this.character.confidence=0;
  }
  IncreaseConfidence (){
    this.character.confidence++;
  }
  CalculateExperience(){
    if(this.character.age>5){
      this.character.experiencePoint=50;
      var ageLeft = this.character.age-5;
      this.character.experiencePoint+=(ageLeft*15);
    }
    else{
      this.character.experiencePoint=50;
    }
  }
  GetConfidence():number{
    return this.character.confidence;
  }
  GetExperience():number{
    return this.character.experiencePoint;
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
