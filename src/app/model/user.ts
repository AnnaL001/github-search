import { Repository } from "./repository";

export class User {
  constructor(
    public username: string,
    public avatar: string,
    public repos: Array<Repository>,
    public publicRepos: number,
    public bio: string,
    public followers: number,
    public following: number,
    public createdAt: Date){}
}
