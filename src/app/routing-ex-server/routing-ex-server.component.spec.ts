import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExServerComponent } from './routing-ex-server.component';

describe('RoutingExServerComponent', () => {
  let component: RoutingExServerComponent;
  let fixture: ComponentFixture<RoutingExServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
