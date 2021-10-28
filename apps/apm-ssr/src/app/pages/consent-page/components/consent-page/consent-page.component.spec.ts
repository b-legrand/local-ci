import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsentPageComponent } from './consent-page.component';

describe('ConsentPageComponent', () => {
  let component: ConsentPageComponent;
  let fixture: ComponentFixture<ConsentPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
