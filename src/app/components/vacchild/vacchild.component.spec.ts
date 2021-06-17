import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacchildComponent } from './vacchild.component';

describe('VacchildComponent', () => {
  let component: VacchildComponent;
  let fixture: ComponentFixture<VacchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
