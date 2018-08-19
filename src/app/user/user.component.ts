import { UsersService } from './../services/users.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

@Input() user:any;
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit() {
  }


  saveUser()
  {
    this.userService.currentUser= this.user.login.username;
    this.userService.currentPassword= this.user.login.password;
    this.router.navigate(['login']);

  }

}



