import { useRouter } from "next/router";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { Security } from "@okta/okta-react";
import config from "@/config";

const oktaAuth = new OktaAuth(config.oidc);

export default function Home() {
  const router = useRouter();

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    router.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      <button onClick={() => oktaAuth.signInWithRedirect()}>Sign In</button>
    </Security>
  );
}
