import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExServersComponent } from './routing-ex-servers.component';

describe('RoutingExServersComponent', () => {
  let component: RoutingExServersComponent;
  let fixture: ComponentFixture<RoutingExServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
