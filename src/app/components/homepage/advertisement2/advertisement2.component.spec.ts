import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertisement2Component } from './advertisement2.component';

describe('Advertisement2Component', () => {
  let component: Advertisement2Component;
  let fixture: ComponentFixture<Advertisement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Advertisement2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Advertisement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
