import { OktaAuth } from "@okta/okta-auth-js";

const config = {
  oidc: {
    issuer: process.env.OKTA_OAUTH2_ISSUER,
    clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window?.location.origin}/login/callback`,
  },
  widget: {
    issuer: process.env.OKTA_OAUTH2_ISSUER,
    clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window?.location.origin}/login/callback`,
  },
};

const createOkta = (config) => {
  return typeof window !== "undefined" && new OktaAuth(config);
};

export const oktaAuth = createOkta(config.oidc);

export const oktaWidget = createOkta(config.widget);
