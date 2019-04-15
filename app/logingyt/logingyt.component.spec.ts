import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingytComponent } from './logingyt.component';

describe('LogingytComponent', () => {
  let component: LogingytComponent;
  let fixture: ComponentFixture<LogingytComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogingytComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogingytComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
