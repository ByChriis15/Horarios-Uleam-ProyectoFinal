import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosRestaurantComponent } from './comentarios-restaurant.component';

describe('ComentariosRestaurantComponent', () => {
  let component: ComentariosRestaurantComponent;
  let fixture: ComponentFixture<ComentariosRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosRestaurantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
