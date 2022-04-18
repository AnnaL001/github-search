import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/model/repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  @Input() repos = [] as Repository[];
  constructor() {}

  ngOnInit(): void {}

  getHighestForks(repos: Repository[]) {
    let highestForks = Math.max(...repos.map((repo) => repo.forks), 1);
    return highestForks;
  }
}
