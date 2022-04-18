export class Repository {
  constructor(
    public name: string,
    public description: string ,
    public owner: string,
    public language: string,
    public forks: number,
    public url: string,
    public createdAt: Date){}
}
