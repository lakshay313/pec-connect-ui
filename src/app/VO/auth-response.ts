export class AuthResponse {
  constructor(
    public uid?: number,
    public sid?: number,
    public first_name?: string,
    public last_name?: string,
    public role?: string,
    public permissions?: string,
  ) {}
}
