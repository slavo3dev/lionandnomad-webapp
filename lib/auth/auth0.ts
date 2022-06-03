import { initAuth0 } from "@auth0/nextjs-auth0";

export default initAuth0({
    // @ts-ignore
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
    baseURL: process.env.AUTH0_BASE_URL || "",
    // @ts-ignore
    clientId: process.env.AUTH0_CLIENT_ID || "",
    clientSecret: process.env.AUTH0_CLIENT_SECRET || "",
    secret: process.env.AUTH0_SECRET || "",
    // @ts-ignore
    redirectUri: process.env.AUTH0_REDIRECT_URI || "",
    postLogoutRedirectUri: process.env.AUTH0_POST_LOGOUT_REDIRECT_URI || "",
});
