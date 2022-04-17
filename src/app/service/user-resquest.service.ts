import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repository } from '../model/repository';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserResquestService {

  user: User;

  constructor(private http: HttpClient) {
    this.user = new User("", "", 0, "", 0, 0, new Date(), []);
  }

  sendUserRequest(username: string|null){
    this.user = {} as User; // Clear previous input
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(`https://api.github.com/users/${username}?access_key=${environment.apiKey}`).toPromise().then(
        response => {
          console.log(response);
          // Map user information to user instance
          this.user.username = response.login;
          this.user.avatar = response.avatar_url;
          this.user.publicRepos = response.public_repos;
          this.user.bio = response.bio;
          this.user.followers = response.followers;
          this.user.following = response.following;
          this.user.createdAt = response.created_at;
          console.log(this.user);
          resolve();
        },
        error => {
          reject(error);
        }
      )

      // Fetch a user's repos
      this.http.get<any>(`https://api.github.com/users/${username}/repos?order=created&sort=desc?access_key=${environment.apiKey}`).toPromise().then(
        response => {
          console.log(response);
          let repos = response.map((repo: any) => new Repository(repo.name, repo.description, repo.owner.login, repo.language, 0, repo.forks, 0, repo.html_url, repo.created_at));
          this.user.repos = repos;
          resolve();
        },
        error => {
          reject(error);
        }
      )
    });
    return promise
  }
}
