import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendaraanBersejarahComponent } from './kendaraan-bersejarah.component';

describe('KendaraanBersejarahComponent', () => {
  let component: KendaraanBersejarahComponent;
  let fixture: ComponentFixture<KendaraanBersejarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KendaraanBersejarahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendaraanBersejarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
