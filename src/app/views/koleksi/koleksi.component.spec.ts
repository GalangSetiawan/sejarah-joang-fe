import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoleksiComponent } from './koleksi.component';

describe('KoleksiComponent', () => {
  let component: KoleksiComponent;
  let fixture: ComponentFixture<KoleksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KoleksiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoleksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
