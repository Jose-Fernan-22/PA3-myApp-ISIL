import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefsSection } from './chefs-section';

describe('ChefsSection', () => {
  let component: ChefsSection;
  let fixture: ComponentFixture<ChefsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
