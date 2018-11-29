export class Detail {
  public email: string;
  public toipc: string;
  public message: string;

  constructor(options: any) {
    for (let key in options) {
      this[key] = options[key];
    }
  }
}
