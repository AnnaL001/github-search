import { Repository } from "./repository";

export class User {
  constructor(
    public username: string = "",
    public avatar: string = "",
    public publicRepos: number = 0,
    public bio: string = "",
    public followers: number = 0,
    public following: number = 0,
    public createdAt: Date = new Date(),
    public repos: Array<Repository> = []){}
}
