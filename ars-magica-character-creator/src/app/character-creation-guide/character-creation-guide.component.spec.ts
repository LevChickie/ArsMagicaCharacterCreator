import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCreationGuideComponent } from './character-creation-guide.component';

describe('CharacterCreationGuideComponent', () => {
  let component: CharacterCreationGuideComponent;
  let fixture: ComponentFixture<CharacterCreationGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCreationGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterCreationGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
