import { Repository } from "./repository";

export class User {
  constructor(
    public username: string,
    public avatar: string,
    public publicRepos: number,
    public bio: string,
    public followers: number,
    public following: number,
    public createdAt: Date,
    public repos: Array<Repository>){}
}
