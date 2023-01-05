import { Article } from '@/types/Article'
import { useState } from 'react'

interface InitialValues {
  leadingArticle?: Article
}

export const useLeadingArticle = (initialValues: InitialValues) => {
  const [leadingArticle, setLeadingArticle] = useState<Article | undefined>(
    initialValues.leadingArticle,
  )

  const [fetchingLeadingArticle, setFetchingLeadingArticle] =
    useState<boolean>(false)

  const fetchLeadingArticle = async (): Promise<void> => {
    if (leadingArticle) {
      return
    }
    setFetchingLeadingArticle(true)

    try {
      setLeadingArticle(
        await fetch('/api/articles/leading').then((r) => r.json()),
      )
    } catch (e) {
      console.error(e)
    } finally {
      setFetchingLeadingArticle(false)
    }
  }

  return {
    fetchLeadingArticle,
    leadingArticle,
    fetchingLeadingArticle,
  }
}
