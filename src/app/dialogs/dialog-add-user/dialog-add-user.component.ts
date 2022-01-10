import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>,
              private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close()
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime()
    console.log('new user is:', this.user)
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        console.log('Save User to Firestore finished', result)
        setTimeout(() => {
          this.dialogRef.close();
          this.loading = false
        }, 1000)
      })
  }

}
