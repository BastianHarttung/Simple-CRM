import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserDetailsComponent } from './dialog-edit-user-details.component';

describe('DialogEditUserDetailsComponent', () => {
  let component: DialogEditUserDetailsComponent;
  let fixture: ComponentFixture<DialogEditUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
