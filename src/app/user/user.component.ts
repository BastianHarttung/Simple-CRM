import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogAddUserComponent} from "../dialogs/dialog-add-user/dialog-add-user.component";
import {User} from "../../models/user.class";

export interface DialogData {
   userName: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:User = new User();

  constructor(public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      data: {userName: this.user}
    })
  }

}
