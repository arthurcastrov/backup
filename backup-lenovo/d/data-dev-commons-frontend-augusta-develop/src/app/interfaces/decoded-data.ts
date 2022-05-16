export interface DecodedData{
  at_hash: string;
  sub: string;
  ["cognito:groups"]?: string[] | null;
  email_verified: boolean;
  iss: string;
  ["cognito:username"]: string;
  given_name: string;
  aud: string;
  identities?: IdentitiesEntity[] | null;
  token_use: string;
  auth_time: number;
  name: string;
  nickname: string;
  exp: number;
  iat: number;
  family_name: string;
  email: string;
}

export interface IdentitiesEntity {
  userId: string;
  providerName: string;
  providerType: string;
  issuer: string;
  primary: string;
  dateCreated: string;
}
