import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Input } from 'src/app/model/input';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  formInput = {} as Input;
  @Output() inputUsername = new EventEmitter<Input>();

  constructor() { }

  ngOnInit(): void {
  }

  submitUsername(input: Input){
    this.formInput.name = input.name
    this.inputUsername.emit(this.formInput);
    console.log(this.formInput);
  }

}
