import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrogytComponent } from './registrogyt.component';

describe('RegistrogytComponent', () => {
  let component: RegistrogytComponent;
  let fixture: ComponentFixture<RegistrogytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrogytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrogytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
