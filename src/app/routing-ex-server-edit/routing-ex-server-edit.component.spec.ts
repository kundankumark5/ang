import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingExServerEditComponent } from './routing-ex-server-edit.component';

describe('RoutingExServerEditComponent', () => {
  let component: RoutingExServerEditComponent;
  let fixture: ComponentFixture<RoutingExServerEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingExServerEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingExServerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
