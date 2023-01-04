import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosSanlorenzoComponent } from './comentarios-sanlorenzo.component';

describe('ComentariosSanlorenzoComponent', () => {
  let component: ComentariosSanlorenzoComponent;
  let fixture: ComponentFixture<ComentariosSanlorenzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariosSanlorenzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariosSanlorenzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
