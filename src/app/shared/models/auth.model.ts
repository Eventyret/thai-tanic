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

export interface JWTDecoded {
  id?: number;
  iat?: number;
  exp?: number;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  type: string;
  permissions: string[];
  users: string[];
  created_by: string;
  updated_by: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  provider: string;
  confirmed: boolean;
  blocked: boolean;
  role: Role;
}
