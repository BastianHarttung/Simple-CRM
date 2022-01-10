import {Component, OnInit} from '@angular/core';
import {User} from "../../../models/user.class";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  birthDate: any;
  loading = false;

  constructor(private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime()
    console.log('new user is:', this.user)
    this.firestore
      .collection('users')
      .add(this.user.toJson())
      .then((result: any) => {
        console.log('Adding User finished', result)
        setTimeout(() => {
          this.loading = false
        }, 3000)
      })
  }

}
