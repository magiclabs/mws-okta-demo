import { Magic } from "magic-sdk";
import { OpenIdExtension } from "@magic-ext/oidc";

const createMagic = (key) => {
  return (
    typeof window !== "undefined" &&
    new Magic(key, {
      extensions: [new OpenIdExtension()],
    })
  );
};

export const magic = createMagic(process.env.MAGIC_PUBLISHABLE_API_KEY);
