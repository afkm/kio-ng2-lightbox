import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightboxItemComponent } from './lightbox-item.component';

describe('LightboxItemComponent', () => {
  let component: LightboxItemComponent;
  let fixture: ComponentFixture<LightboxItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightboxItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
