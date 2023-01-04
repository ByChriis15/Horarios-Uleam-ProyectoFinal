import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosWyndhamComponent } from './comentarios-wyndham.component';

describe('ComentariosWyndhamComponent', () => {
  let component: ComentariosWyndhamComponent;
  let fixture: ComponentFixture<ComentariosWyndhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosWyndhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosWyndhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
