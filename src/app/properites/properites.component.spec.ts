import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperitesComponent } from './properites.component';

describe('ProperitesComponent', () => {
  let component: ProperitesComponent;
  let fixture: ComponentFixture<ProperitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProperitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
