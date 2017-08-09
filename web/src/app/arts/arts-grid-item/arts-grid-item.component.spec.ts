import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsGridItemComponent } from './arts-grid-item.component';

describe('ArtsGridItemComponent', () => {
  let component: ArtsGridItemComponent;
  let fixture: ComponentFixture<ArtsGridItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsGridItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
