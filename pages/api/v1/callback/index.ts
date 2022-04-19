import auth0 from '../../../../lib/auth/auth0';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
  try {
    // @ts-ignore
    await auth0.handleCallback(req, res, {redirectTo: '/'});
  } catch(error: any) {
    console.error(error);
    res.status(error.status || 400).end(error.message);
  }
}