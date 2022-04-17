import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.component.html',
  styleUrls: ['./user-result.component.css']
})
export class UserResultComponent implements OnInit {

  @Input() user = {} as User;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRepoList(username: string){
    this.router.navigate(['/users', username]);
  }
}
