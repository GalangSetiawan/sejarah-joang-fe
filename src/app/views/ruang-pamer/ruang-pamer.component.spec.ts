import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuangPamerComponent } from './ruang-pamer.component';

describe('RuangPamerComponent', () => {
  let component: RuangPamerComponent;
  let fixture: ComponentFixture<RuangPamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuangPamerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuangPamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
