import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterTypesComponent } from './character-types.component';

describe('CharacterTypesComponent', () => {
  let component: CharacterTypesComponent;
  let fixture: ComponentFixture<CharacterTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
