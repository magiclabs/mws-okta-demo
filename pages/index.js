import { magic } from "@/lib/magic";

export default function Home() {
  const handleLogin = () => {
    magic.openid.loginWithOIDC({
      jwt: "",
      providerId: process.env.MAGIC_PROVIDER_ID,
    });
  };

  return (
    <>
      <button onClick={handleLogin}>Sign in</button>
    </>
  );
}
