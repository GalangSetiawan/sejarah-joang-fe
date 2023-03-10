import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BendaBersejarahComponent } from './benda-bersejarah.component';

describe('BendaBersejarahComponent', () => {
  let component: BendaBersejarahComponent;
  let fixture: ComponentFixture<BendaBersejarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BendaBersejarahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BendaBersejarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
