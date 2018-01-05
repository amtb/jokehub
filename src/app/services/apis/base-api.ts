export class BaseApi {
  protected baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
}