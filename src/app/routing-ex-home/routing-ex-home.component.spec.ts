import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExHomeComponent } from './routing-ex-home.component';

describe('RoutingExHomeComponent', () => {
  let component: RoutingExHomeComponent;
  let fixture: ComponentFixture<RoutingExHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
