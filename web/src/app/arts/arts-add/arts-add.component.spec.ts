import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsAddComponent } from './arts-add.component';

describe('ArtsAddComponent', () => {
  let component: ArtsAddComponent;
  let fixture: ComponentFixture<ArtsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
