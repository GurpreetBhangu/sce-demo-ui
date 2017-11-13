import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiaccountComponent } from './multiaccount.component';

describe('MultiaccountComponent', () => {
  let component: MultiaccountComponent;
  let fixture: ComponentFixture<MultiaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
