import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigWhatsComponent } from './config-whats.component';

describe('ConfigWhatsComponent', () => {
  let component: ConfigWhatsComponent;
  let fixture: ComponentFixture<ConfigWhatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigWhatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigWhatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
