import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomImageComponent } from './random-image.component';

describe('RandomImageComponent', () => {
  let component: RandomImageComponent;
  let fixture: ComponentFixture<RandomImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
