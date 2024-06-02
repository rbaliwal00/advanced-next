
import SuperTokens from "supertokens-web-js";
import Session from "supertokens-web-js/recipe/session";
import Passwordless from "supertokens-web-js/recipe/passwordless";
import { config } from "@modules/common";

if (typeof window !== "undefined") {
  SuperTokens.init({
    appInfo: config.appInfo,
    recipeList: [
      // Passwordless.init(),
      Session.init(),
      Passwordless.init(),
      // ThirdParty.init(),
    ],
  });
}
