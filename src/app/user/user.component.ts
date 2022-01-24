import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../dialogs/dialog-add-user/dialog-add-user.component";
import {User} from "../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  allUsers = [];

  constructor(public dialog: MatDialog,
              private firestore: AngularFirestore) {

  }

  ngOnInit(): void {
    this.firestore
      .collection('users')
      .valueChanges({idField: 'userId'})
      .subscribe((changes: any) => {
        this.allUsers = changes;
        console.log('received changes from DB', changes);
      })
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      data: {userName: this.user}
    })
  }

  generateBirthDate(birthdayInMs: string) {
    return new Date(birthdayInMs).toLocaleDateString()
  }

}
