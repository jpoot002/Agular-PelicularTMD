import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaruselmultiplesComponent } from './caruselmultiples.component';

describe('CaruselmultiplesComponent', () => {
  let component: CaruselmultiplesComponent;
  let fixture: ComponentFixture<CaruselmultiplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaruselmultiplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaruselmultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
