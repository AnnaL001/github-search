import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/model/repository';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() repos = [] as Repository[];
  constructor() { }

  ngOnInit(): void {
  }

}
