import type { NextApiRequest, NextApiResponse } from 'next'

import { data } from '../../../../data';


function handlePosts (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}

export default handlePosts;