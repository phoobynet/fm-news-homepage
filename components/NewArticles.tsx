import styles from './NewArticles.module.scss'
import { NewArticle } from '@/types/NewArticle'

interface Props {
  newArticles?: NewArticle[]
}

export default function NewArticles({ newArticles }: Props) {
  if (!newArticles?.length) {
    return null
  }

  return (
    <div className={styles.newArticles}>
      <div
        role="heading"
        aria-level={2}
        className={styles.heading}
      >
        New
      </div>
      <ul className={styles.articles}>
        {newArticles.map((x, i) => (
          <li key={i}>
            <article className={styles.article}>
              <div className={styles.headline}>{x.headline}</div>
              <div className={styles.summary}>{x.summary}</div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
