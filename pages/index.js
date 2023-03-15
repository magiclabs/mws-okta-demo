import { useRouter } from "next/router";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import config from "@/config";
import { useEffect, useRef } from "react";
// import oktaAuth from "../lib/okta";

const Home = () => {
  const router = useRouter();

  const oktaAuth = new OktaAuth({
    issuer: "https://dev-99509845.okta.com/oauth2/default",
    clientId: "0oa8p5avewvdE6XYY5d7",
    scopes: ["openid", "profile", "email"],
    redirectUri: `http://localhost:3000/login/callback`,
  });

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    router.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <button onClick={() => oktaAuth.signInWithRedirect()}>Sign In</button>
    </Security>
  );
};

export default Home;
