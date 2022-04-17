export class Repository {
  constructor(
    public name: string = "",
    public description: string = "",
    public owner: string = "",
    public language: string = "",
    public branches: number = 0,
    public forks: number = 0,
    public commits: number = 0,
    public url: string = "",
    public createdAt: Date = new Date()){}
}
