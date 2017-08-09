import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsDetailsComponent } from './arts-details.component';

describe('ArtsDetailsComponent', () => {
  let component: ArtsDetailsComponent;
  let fixture: ComponentFixture<ArtsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
