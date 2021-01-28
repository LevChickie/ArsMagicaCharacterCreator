import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Skills} from '../mock/skill-list';
import {Skill} from '../models/skill'
import {FormControl} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { CreateCharacterServiceService } from '../services/create-character-service.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skills : Skill[];
  characterService: CreateCharacterServiceService;

  constructor( private createCharacterService: CreateCharacterServiceService ) {  }

  ngOnInit(): void {
    this.skills = Skills;
  }
  ImproveSkill()
  {
    this.characterService.ImproveSkill(this.skillControl.value.name,this.skillValue);
  }
}
