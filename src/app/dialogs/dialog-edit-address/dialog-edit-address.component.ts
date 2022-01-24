import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {MatDialogRef} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user: User = new User();
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>,
              private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialogRef.close()
  }

  saveUser() {
    this.loading = true;
    /*
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        console.log('Save User to Firestore finished', result)
        setTimeout(() => {
          this.dialogRef.close();
          this.loading = false
        }, 1000)
      })*/
  }

}
