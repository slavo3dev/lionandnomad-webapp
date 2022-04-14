import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const axiosRes = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = axiosRes.data;
    res.status(200).json(posts.slice(0, 10));
  } catch (e: any) {
    console.error(e);
    res.status(e.status || 400).json({message: 'Api error'});
  }
}