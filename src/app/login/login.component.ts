import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.username = this.userService.currentUser;
    this.password = this.userService.currentPassword;
  }

}
