export class Repository {
  constructor(
    public name: string,
    public description: string,
    public owner: string,
    public languages: Array<String>,
    public branches: number,
    public forks: number,
    public commits: number,
    public url: string){}
}
