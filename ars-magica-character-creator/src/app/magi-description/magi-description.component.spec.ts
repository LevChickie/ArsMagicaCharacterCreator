import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagiDescriptionComponent } from './magi-description.component';

describe('MagiDescriptionComponent', () => {
  let component: MagiDescriptionComponent;
  let fixture: ComponentFixture<MagiDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagiDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagiDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
