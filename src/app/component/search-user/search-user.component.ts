import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  user = {} as User;
  username = "";
  @Output() inputUsername = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  submitUsername(username: string){
    this.username = username
    this.inputUsername.emit(this.username);
    console.log(this.username);
  }

}
