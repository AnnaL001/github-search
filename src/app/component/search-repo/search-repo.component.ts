import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from 'src/app/model/input';

@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

  input = {} as Input
  @Output() repoName = new EventEmitter<Input>();
  constructor() { }

  ngOnInit(): void {
  }

  submitRepoName(repo: Input){
    this.input.name = repo.name;
    this.repoName.emit(this.input);
  }

}
