export class Tags {
  atrocious: boolean = false;
  broken: boolean = false;
  funny: boolean = false;
  novel: boolean = false;
  overpowered: boolean = false;
  plagiarized: boolean = false;
  unlikely: boolean = false;
  youTried: boolean = false;

  toString(): string {
      return `{"atrocious": ${this.atrocious}, "broken": ${this.broken}, "funny": ${this.funny}, "novel": ${this.novel}, "overpowered": ${this.overpowered}, "plagiarized": ${this.plagiarized}, "unlikely": ${this.unlikely}, "youTried": ${this.youTried}}`;
  }
}
