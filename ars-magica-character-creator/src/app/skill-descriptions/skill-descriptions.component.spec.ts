import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillDescriptionsComponent } from './skill-descriptions.component';

describe('SkillDescriptionsComponent', () => {
  let component: SkillDescriptionsComponent;
  let fixture: ComponentFixture<SkillDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
