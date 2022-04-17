import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserResquestService } from 'src/app/service/user-resquest.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  @Input() user = {} as User;
  constructor() { }

  ngOnInit(): void {

  }

}
