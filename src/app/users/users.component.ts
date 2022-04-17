import { Component, OnInit } from '@angular/core';
import { Input } from '../model/input';
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

  searchUser(input: Input){
    this.userService.sendUserRequest(input.name);
    this.user = this.userService.user;
  }

  isEmpty(user: User){
    return Object.keys(user).length === 0;
  }
}
