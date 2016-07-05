export class Link {
  public name: string;
  public externalLink: string;
  public internalLink: Array<string|Object>;
  public iconPath: string;

  constructor(name: string, internalLink?: Array<string|Object>, externalLink?: string, iconPath?: string) {
    this.name = name;
    this.externalLink = externalLink;
    this.internalLink = internalLink;
    this.iconPath = iconPath;
  }
}
