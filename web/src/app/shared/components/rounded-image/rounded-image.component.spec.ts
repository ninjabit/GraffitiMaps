import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedImageComponent } from './rounded-image.component';

describe('RoundedImageComponent', () => {
  let component: RoundedImageComponent;
  let fixture: ComponentFixture<RoundedImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundedImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundedImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
