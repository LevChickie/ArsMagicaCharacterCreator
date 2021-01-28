import { Component, OnInit } from '@angular/core';
import { Skills} from '../mock/skill-list';
import {Skill} from '../models/skill'
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skills : Skill[];
  constructor() { }

  ngOnInit(): void {
    this.skills = Skills;
  }

}
