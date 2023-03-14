const config = {
  oidc: {
    issuer: process.env.OKTA_OAUTH2_ISSUER,
    clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
  },
  widget: {
    issuer: process.env.OKTA_OAUTH2_ISSUER,
    clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
  },
};

export default config;
