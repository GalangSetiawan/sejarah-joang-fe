import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokohSejarahComponent } from './tokoh-sejarah.component';

describe('TokohSejarahComponent', () => {
  let component: TokohSejarahComponent;
  let fixture: ComponentFixture<TokohSejarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokohSejarahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokohSejarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
