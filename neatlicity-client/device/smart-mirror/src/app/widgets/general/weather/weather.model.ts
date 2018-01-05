export class Weather {
  public temperature: string;
  public icon: string;

  constructor(temperature: string, icon: string) {
    this.temperature = temperature;
    this.icon = icon;
  }
}
