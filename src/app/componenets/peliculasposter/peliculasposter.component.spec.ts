import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasposterComponent } from './peliculasposter.component';

describe('PeliculasposterComponent', () => {
  let component: PeliculasposterComponent;
  let fixture: ComponentFixture<PeliculasposterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasposterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasposterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
