import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestFoodsForYouComponent } from './best-foods-for-you.component';

describe('BestFoodsForYouComponent', () => {
  let component: BestFoodsForYouComponent;
  let fixture: ComponentFixture<BestFoodsForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestFoodsForYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestFoodsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
