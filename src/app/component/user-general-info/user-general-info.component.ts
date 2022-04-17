import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-general-info',
  templateUrl: './user-general-info.component.html',
  styleUrls: ['./user-general-info.component.css']
})
export class UserGeneralInfoComponent implements OnInit {

  @Input() user = {} as User;
  constructor() { }

  ngOnInit(): void {
  }

}
