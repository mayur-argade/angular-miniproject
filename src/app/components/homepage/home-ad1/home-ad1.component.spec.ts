import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAd1Component } from './home-ad1.component';

describe('HomeAd1Component', () => {
  let component: HomeAd1Component;
  let fixture: ComponentFixture<HomeAd1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeAd1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
