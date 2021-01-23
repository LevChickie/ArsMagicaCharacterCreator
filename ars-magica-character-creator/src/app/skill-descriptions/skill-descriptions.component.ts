import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/skill';

@Component({
  selector: 'app-skill-descriptions',
  templateUrl: './skill-descriptions.component.html',
  styleUrls: ['./skill-descriptions.component.css']
})
export class SkillDescriptionsComponent implements OnInit {
  skills : Skill[];
  constructor() { }

  ngOnInit(): void {
  }

}
