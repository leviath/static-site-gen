import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaseredContentComponent } from './teasered-content.component';

describe('TeaseredContentComponent', () => {
  let component: TeaseredContentComponent;
  let fixture: ComponentFixture<TeaseredContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaseredContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaseredContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
