import { Component, OnInit } from '@angular/core';
import { Input } from '../../model/input';
import { User } from '../../model/user';
import { UserRequestService } from '../../service/user-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user = {} as User;
  constructor(private userService: UserRequestService) { }

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
