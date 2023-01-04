import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosPlayamurcieComponent } from './comentarios-playamurcie.component';

describe('ComentariosPlayamurcieComponent', () => {
  let component: ComentariosPlayamurcieComponent;
  let fixture: ComponentFixture<ComentariosPlayamurcieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosPlayamurcieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosPlayamurcieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
