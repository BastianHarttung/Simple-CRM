import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {User} from "../../models/user.class";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: any;
  user: User = new User();

  constructor(private route: ActivatedRoute,
              private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id')
      this.loadUserDataFromFirebase()
    })
  }

  loadUserDataFromFirebase(): void {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user: any) => {
        this.user = new User(user);
        console.log('get user', user)
      })
  }

  editAddress(){
    console.log('edit address')
  }

  editNameEmail(){
    console.log('edit name')
  }

}
