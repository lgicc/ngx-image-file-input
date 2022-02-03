import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageFileInputComponent } from './ngx-image-file-input.component';

describe('NgxImageFileInputComponent', () => {
  let component: NgxImageFileInputComponent;
  let fixture: ComponentFixture<NgxImageFileInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageFileInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxImageFileInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
