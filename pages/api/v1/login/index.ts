
import type { NextApiRequest, NextApiResponse } from 'next'
import auth0  from "../../../../lib/auth/auth0"

export default async function login(req: NextApiRequest, res: NextApiResponse) {

    try {
      await auth0.handleLogin(req, res);
      console.log("Auth0", auth0)
    } catch(error: any) {
      console.error(error);
      res.status(error.status || 400).end(error.message);
    }
  }