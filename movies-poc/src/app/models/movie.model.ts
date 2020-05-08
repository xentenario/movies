export class MovieModel {
  constructor(
  public imdbID: string,
  public posterUrl: string,
  public title: string,
  public rated: string,
  public year: number,
  public length: number,
  public releasedOn: string,
  public plot: string
  ) {}
}
