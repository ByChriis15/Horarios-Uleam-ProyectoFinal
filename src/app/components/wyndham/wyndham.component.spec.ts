import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyndhamComponent } from './wyndham.component';

describe('WyndhamComponent', () => {
  let component: WyndhamComponent;
  let fixture: ComponentFixture<WyndhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyndhamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyndhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
