import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserResquestService } from '../service/user-resquest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = {} as User;
  constructor(private userService: UserResquestService) { }

  ngOnInit(): void {
  }

  searchUser(username: string){
    this.user = {} as User;
    this.userService.sendUserRequest(username);
    this.user = this.userService.user;
  }

  isEmpty(user: User){
    return Object.keys(user).length === 0;
  }
}
