import { articleRepository } from '@/database/articleRepository'
import { NewArticle } from '@/types/NewArticle'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewArticle[]>,
) {
  res.status(200).json(await articleRepository.getNewArticles())
}
