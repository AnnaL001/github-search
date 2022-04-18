import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserRequestService } from 'src/app/service/user-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username = "AnnaL001";
  user = {} as User;
  constructor(private userService: UserRequestService) { }

  ngOnInit(): void {
    this.userService.sendUserRequest(this.username);
    this.user = this.userService.user;
  }

}
