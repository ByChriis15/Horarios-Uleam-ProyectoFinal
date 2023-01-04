import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranthlpComponent } from './restauranthlp.component';

describe('RestauranthlpComponent', () => {
  let component: RestauranthlpComponent;
  let fixture: ComponentFixture<RestauranthlpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestauranthlpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranthlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
