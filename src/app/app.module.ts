import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UllusersComponent } from './ullusers/ullusers.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UllusersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([
      {path:"", redirectTo:"allusers", pathMatch:"full"},
      {path:"allusers", component: UllusersComponent},
      {path:"login", component:LoginComponent } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
