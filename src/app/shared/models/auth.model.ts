export interface AuthResponse {
  jwt?: string;
  user?: any;
}

export interface AuthUser {
  username?: string;
  identifier?: string;
  email?: string;
  password: string;
}
