import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DialogEditUserDetailsComponent} from './dialog-edit-user-details.component';
import {RouterModule} from "@angular/router";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";

describe('DialogEditUserDetailsComponent', () => {
  let component: DialogEditUserDetailsComponent;
  let fixture: ComponentFixture<DialogEditUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule
      ],
      declarations: [DialogEditUserDetailsComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: []
      }]
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
