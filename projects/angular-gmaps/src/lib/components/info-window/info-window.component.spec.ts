import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgInfoWindowComponent } from './info-window.component';

describe('InfoWindowComponent', () => {
  let component: AgInfoWindowComponent;
  let fixture: ComponentFixture<AgInfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgInfoWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
