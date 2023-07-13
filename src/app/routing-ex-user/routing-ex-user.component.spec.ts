import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExUserComponent } from './routing-ex-user.component';

describe('RoutingExUserComponent', () => {
  let component: RoutingExUserComponent;
  let fixture: ComponentFixture<RoutingExUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
