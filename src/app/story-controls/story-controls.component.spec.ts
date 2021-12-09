import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryControlsComponent } from './story-controls.component';

describe('StoryControlsComponent', () => {
  let component: StoryControlsComponent;
  let fixture: ComponentFixture<StoryControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryControlsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
