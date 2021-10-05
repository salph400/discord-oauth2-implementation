export enum DISCORD_API_ROUTES {
  OAUTH2_TOKEN = 'https://discord.com/api/v8/oauth2/token',
  OAUTH2_USER = 'https://discord.com/api/v8/users/@me',
}

export type OAuth2ExchangeRequestParams = {
  client_id: string;
  client_secret: string;
  grant_type: string;
  code: string;
  redirect_uri: string;
};

export type DiscordOAuth2CredentialsResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
};

export type DiscordOAuth2UserResponse = {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  email?: string;
  verified?: boolean;
  public_flags: number;
  flags: number;
  banner: string | null;
  banner_color: string | null;
  accent_color: string | null;
  locale: string;
  mfa_enabled: boolean;
};

export type CreateUserParams = {
  discordId: string;
  accessToken: string;
  refreshToken: string;
  username: string;
  discriminator: string;
  tag: string;
  avatar: string;
};
/**
 * {
  access_token: '5UU9hORqgjdAzY7RCjqd1sqdqULnvi',
  expires_in: 604800,
  refresh_token: 'tA30sd4zFBZtAjBk4Qke7FlQrzhbwF',
  scope: 'identify',
  token_type: 'Bearer'
}
 */
