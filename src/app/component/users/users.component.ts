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

  async searchUser(input: Input){
    try {
      await this.userService.sendUserRequest(input.name);
      this.user = this.userService.user;
    } catch(error){
      console.log("An error has occurred",error);
    }
  }

  isEmpty(user: User){
    return Object.keys(user).length === 0;
  }
}
