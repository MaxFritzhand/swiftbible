import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSlideOutPanelComponent } from './app-slide-out-panel.component';

describe('AppSlideOutPanelComponent', () => {
  let component: AppSlideOutPanelComponent;
  let fixture: ComponentFixture<AppSlideOutPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSlideOutPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSlideOutPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
