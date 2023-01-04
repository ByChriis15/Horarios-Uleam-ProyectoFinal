import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanlorenzoComponent } from './sanlorenzo.component';

describe('SanlorenzoComponent', () => {
  let component: SanlorenzoComponent;
  let fixture: ComponentFixture<SanlorenzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanlorenzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanlorenzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
