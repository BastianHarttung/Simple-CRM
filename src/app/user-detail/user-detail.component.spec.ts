import {ComponentFixture, TestBed} from '@angular/core/testing';

import {UserDetailComponent} from './user-detail.component';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {MatMenuModule} from "@angular/material/menu";


describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  const fakeActivatedRoute = {
    snapshot: {data: {}, params: {}, url: {}}
  } as ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        MatMenuModule
      ],
      declarations: [UserDetailComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: []
        },
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
