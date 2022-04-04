import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WayptDetailComponent } from './waypt-detail.component';

describe('WayptDetailComponent', () => {
  let component: WayptDetailComponent;
  let fixture: ComponentFixture<WayptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WayptDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WayptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
