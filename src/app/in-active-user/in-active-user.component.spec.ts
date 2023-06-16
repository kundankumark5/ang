import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InActiveUserComponent } from './in-active-user.component';

describe('InActiveUserComponent', () => {
  let component: InActiveUserComponent;
  let fixture: ComponentFixture<InActiveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InActiveUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InActiveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
