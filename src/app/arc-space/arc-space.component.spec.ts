import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcSpaceComponent } from './arc-space.component';

describe('ArcSpaceComponent', () => {
  let component: ArcSpaceComponent;
  let fixture: ComponentFixture<ArcSpaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcSpaceComponent]
    });
    fixture = TestBed.createComponent(ArcSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
