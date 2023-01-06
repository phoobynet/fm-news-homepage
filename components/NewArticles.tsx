import styles from './NewArticles.module.scss'
import { NewArticle } from '@/types/NewArticle'
import take from 'lodash/take'
import { useMemo } from 'react'

interface Props {
  newArticles?: NewArticle[]
}

export default function NewArticles({ newArticles }: Props) {
  const topNewArticles = useMemo(
    () => take(newArticles ?? [], 3),
    [newArticles],
  )

  if (!topNewArticles.length) {
    return null
  }

  return (
    <div id="new-articles">
      <div className={styles.newArticles}>
        <div
          role="heading"
          aria-level={2}
          className={styles.heading}
        >
          New
        </div>
        <ul className={styles.articles}>
          {topNewArticles.map((x, i) => (
            <li key={i}>
              <article className={styles.article}>
                <div className={styles.headline}>{x.headline}</div>
                <div className={styles.summary}>{x.summary}</div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
