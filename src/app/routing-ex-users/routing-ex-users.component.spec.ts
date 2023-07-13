import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExUsersComponent } from './routing-ex-users.component';

describe('RoutingExUsersComponent', () => {
  let component: RoutingExUsersComponent;
  let fixture: ComponentFixture<RoutingExUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
