import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singlelistview } from './singlelistview';

describe('Singlelistview', () => {
  let component: Singlelistview;
  let fixture: ComponentFixture<Singlelistview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singlelistview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singlelistview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
