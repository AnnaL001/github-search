import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../model/repository';

@Injectable({
  providedIn: 'root'
})

export class RepoRequestService {

  repositories = [];
  constructor(private http: HttpClient) { }

  sendRepoRequest(repoName: string){
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(`https://api.github.com/search/repositories?q=${repoName}+in:name?order=created_at&sort=desc?access_key=${environment.apiKey}`).toPromise().then(
        response => {
          this.repositories = response.items.map((repo: any) => new Repository(repo.name, repo.description, repo.owner.login, repo.language, repo.forks, repo.html_url, repo.created_at));
          resolve();
        },
        error => {
          reject(error);
        }
      )
    });
    return promise;
  }
}
