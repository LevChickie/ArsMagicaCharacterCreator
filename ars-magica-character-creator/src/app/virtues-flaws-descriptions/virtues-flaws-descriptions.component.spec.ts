import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtuesFlawsDescriptionsComponent } from './virtues-flaws-descriptions.component';

describe('VirtuesFlawsDescriptionsComponent', () => {
  let component: VirtuesFlawsDescriptionsComponent;
  let fixture: ComponentFixture<VirtuesFlawsDescriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VirtuesFlawsDescriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtuesFlawsDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
