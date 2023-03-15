import NextAuth from "next-auth";
import Okta from "next-auth/providers/okta";

export const authOptions = {
  providers: [
    Okta({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID,
      clientSecret: OKTA_OAUTH2_CLIENT_SECRET,
      issuer: OKTA_OAUTH2_ISSUER,
    }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
