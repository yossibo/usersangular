import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ullusers',
  templateUrl: './ullusers.component.html',
  styleUrls: ['./ullusers.component.css']
})
export class UllusersComponent implements OnInit {


  allUsers: any=[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.downloadUsers().subscribe((data) => { 
      this.allUsers=data.results; 
    }); 
  } 
}
