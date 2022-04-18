import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserRequestService } from 'src/app/service/user-request.service';

@Component({
  selector: 'app-user-repo-result',
  templateUrl: './user-repo-result.component.html',
  styleUrls: ['./user-repo-result.component.css']
})
export class UserRepoResultComponent implements OnInit {

  user = {} as User;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserRequestService) { }

  ngOnInit(): void {
    let username = this.route.snapshot.paramMap.get('username');
    this.userService.sendUserRequest(username);
    this.user = this.userService.user;
  }

  goToSearchUsers(){
    this.router.navigate(['/users']);
  }

}
