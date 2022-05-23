import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonWidgetComponent } from './ngx-json-widget.component';

describe('NgxJsonWidgetComponent', () => {
  let component: NgxJsonWidgetComponent;
  let fixture: ComponentFixture<NgxJsonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxJsonWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
