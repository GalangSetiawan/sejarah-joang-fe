import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenahComponent } from './denah.component';

describe('DenahComponent', () => {
  let component: DenahComponent;
  let fixture: ComponentFixture<DenahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DenahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
