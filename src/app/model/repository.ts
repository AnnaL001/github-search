export class Repository {
  constructor(
    public name: string,
    public description: string ,
    public owner: string,
    public language: string,
    public branches: number,
    public forks: number,
    public commits: number,
    public url: string,
    public createdAt: Date){}
}
