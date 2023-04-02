import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SejarahDetailComponent } from './sejarah-detail.component';

describe('SejarahDetailComponent', () => {
  let component: SejarahDetailComponent;
  let fixture: ComponentFixture<SejarahDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SejarahDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SejarahDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
