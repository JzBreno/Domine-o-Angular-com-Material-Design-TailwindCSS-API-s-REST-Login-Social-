import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaZap } from './tela-zap';

describe('TelaZap', () => {
  let component: TelaZap;
  let fixture: ComponentFixture<TelaZap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaZap]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaZap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
