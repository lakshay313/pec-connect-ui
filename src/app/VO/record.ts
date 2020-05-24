export class Record {
  constructor(
    public id?: number,
    public title?: string,
    public type?: string,
    public edition?: string,
    public category?: string,
    public specialisation?: string,
    public path?: string,
    public posted_by?: string,
    public posted_at?: string
  ) { }
}
