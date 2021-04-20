import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AgMapsComponent } from './angular-gmaps.component';

describe('AgMapsComponent', () => {
  let component: AgMapsComponent;
  let fixture: ComponentFixture<AgMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
