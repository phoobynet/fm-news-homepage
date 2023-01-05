import { articleRepository } from '@/database/articleRepository'
import { Article } from '@/types/Article'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>,
) {
  res.status(200).json(await articleRepository.getPopularArticles())
}
