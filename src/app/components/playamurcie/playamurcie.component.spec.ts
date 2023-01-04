import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayamurcieComponent } from './playamurcie.component';

describe('PlayamurcieComponent', () => {
  let component: PlayamurcieComponent;
  let fixture: ComponentFixture<PlayamurcieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayamurcieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayamurcieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
