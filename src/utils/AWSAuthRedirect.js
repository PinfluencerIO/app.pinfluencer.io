import { isLocalhost } from "./isLocal";
export function withLocationDerivedRedirects(awsExports) {
  // Assuming you have two redirect URIs, and the first is for hosted and second is for localhost
  const [productionRedirectSignIn, localRedirectSignIn] =
    awsExports.oauth.redirectSignIn.split(",");

  const [productionRedirectSignOut, localRedirectSignOut] =
    awsExports.oauth.redirectSignOut.split(",");

  const updatedAwsConfig = {
    ...awsExports,
    oauth: {
      ...awsExports.oauth,
      redirectSignIn: isLocalhost
        ? localRedirectSignIn
        : productionRedirectSignIn,
      redirectSignOut: isLocalhost
        ? localRedirectSignOut
        : productionRedirectSignOut,
    },
  };
  return updatedAwsConfig;
}
