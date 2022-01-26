import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogEditUserDetailsComponent} from './dialog-edit-user-details.component';
import {RouterModule} from "@angular/router";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";

describe('DialogEditUserDetailsComponent', () => {
  let component: DialogEditUserDetailsComponent;
  let fixture: ComponentFixture<DialogEditUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), MatDialogModule, AngularFirestore],
      declarations: [DialogEditUserDetailsComponent],
      providers:[MatDialogRef]
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
