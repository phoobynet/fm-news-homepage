import { NewArticle } from '@/types/NewArticle'
import { useState } from 'react'

interface Props {
  newArticles?: NewArticle[]
}

export const useNewArticles = (props: Props) => {
  const [newArticles, setNewArticles] = useState<NewArticle[] | undefined>(
    props.newArticles,
  )
  const [fetchingNewArticles, setFetchingNewArticles] = useState<boolean>(false)

  const fetchNewArticles = async (): Promise<void> => {
    if (newArticles?.length) {
      return
    }

    setFetchingNewArticles(true)

    try {
      setNewArticles(await fetch('/api/articles/new').then((r) => r.json()))
    } catch (e) {
      console.error(e)
    } finally {
      setFetchingNewArticles(false)
    }
  }

  return {
    newArticles,
    fetchNewArticles,
    fetchingNewArticles,
  }
}
