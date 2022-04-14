import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const axiosRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.query.id}`);
    const post = axiosRes.data;
    res.status(200).json(post);
  } catch (e: any) {
    console.error(e);
    res.status(e.status || 400).json({message: 'Api error'});
  }
}