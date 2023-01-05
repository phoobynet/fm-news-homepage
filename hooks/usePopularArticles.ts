import { Article } from '@/types/Article'
import { useState } from 'react'

interface Props {
  popularArticles?: Article[]
}

export const usePopularArticles = (props: Props) => {
  const [popularArticles, setPopularArticles] = useState<Article[] | undefined>(
    props.popularArticles,
  )
  const [fetchingPopularArticles, setFetchingPopularArticles] =
    useState<boolean>(false)

  const fetchPopularArticles = async (): Promise<void> => {
    if (popularArticles?.length) {
      return
    }

    setFetchingPopularArticles(true)

    try {
      setPopularArticles(
        await fetch('/api/articles/popular').then((r) => r.json()),
      )
    } catch (e) {
      console.error(e)
    } finally {
      setFetchingPopularArticles(false)
    }
  }

  return {
    popularArticles,
    fetchPopularArticles,
    fetchingPopularArticles,
  }
}
