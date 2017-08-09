import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapInfoWindowComponent } from './map-info-window.component';

describe('MapInfoWindowComponent', () => {
  let component: MapInfoWindowComponent;
  let fixture: ComponentFixture<MapInfoWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapInfoWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapInfoWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
