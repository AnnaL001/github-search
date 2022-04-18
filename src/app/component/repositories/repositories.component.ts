import { Component, OnInit } from '@angular/core';
import { Input } from '../../model/input';
import { Repository } from '../../model/repository';
import { RepoRequestService } from '../../service/repo-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos = [] as Repository[];
  constructor(private repoService: RepoRequestService) { }

  ngOnInit(): void {
  }

  searchRepo(input: Input){
    this.repoService.sendRepoRequest(input.name);
    this.repos = this.repoService.repositories;
    console.log(this.repoService.repositories);
  }

}
