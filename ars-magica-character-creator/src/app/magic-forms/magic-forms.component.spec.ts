import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFormsComponent } from './magic-forms.component';

describe('MagicFormsComponent', () => {
  let component: MagicFormsComponent;
  let fixture: ComponentFixture<MagicFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
