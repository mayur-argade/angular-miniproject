import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingItems2Component } from './trending-items2.component';

describe('TrendingItems2Component', () => {
  let component: TrendingItems2Component;
  let fixture: ComponentFixture<TrendingItems2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendingItems2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingItems2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
