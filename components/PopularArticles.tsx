import styles from './PopularArticles.module.scss'
import { Article } from '@/types/Article'
import padStart from 'lodash/padStart'
import take from 'lodash/take'
import Image from 'next/image'
import { useMemo } from 'react'

interface Props {
  populateArticles?: Article[]
}

export default function PopularArticles({ populateArticles }: Props) {
  const topPopularArticles = useMemo(
    () => take(populateArticles ?? [], 3),
    [populateArticles],
  )
  return (
    <ul
      className={styles.popularArticles}
      id="popular-articles"
    >
      {topPopularArticles.map((article, i) => (
        <li key={i}>
          <article className={styles.article}>
            <div className={styles.lhs}>
              <Image
                src={article.desktopImageUrl}
                alt=""
                className={styles.image}
              />
            </div>
            <div className={styles.rhs}>
              <div className={styles.index}>
                {padStart((i + 1).toString(), 2, '0')}
              </div>
              <div className={styles.headline}>{article.headline}</div>
              <div className={styles.summary}>{article.summary}</div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  )
}
