import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSectionComponent } from './api-section.component';

describe('ApiSectionComponent', () => {
  let component: ApiSectionComponent;
  let fixture: ComponentFixture<ApiSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
