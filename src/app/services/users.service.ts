import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public currentUser:string;
  public currentPassword:string;

  constructor(private httpclient:HttpClient) { }


  downloadUsers(): Observable<any> {

     return this.httpclient.get("https://randomuser.me/api/?results=10");
  }

  


}
