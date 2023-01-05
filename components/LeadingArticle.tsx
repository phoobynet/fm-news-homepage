import styles from './LeadingArticle.module.scss'
import Button from '@/components/Button'
import { Article } from '@/types/Article'
import Image from 'next/image'

interface Props {
  article?: Article
}

export default function LeadingArticle({ article }: Props) {
  if (!article) {
    return null
  }

  return (
    <div className={styles.leadingArticle}>
      <div className={styles.image}>
        <Image
          src={article.desktopImageUrl}
          alt=""
          className={styles.desktop}
        />
        <Image
          src={article.mobileImageUrl}
          alt=""
          className={styles.mobile}
        />
      </div>
      <div
        className={styles.headline}
        role="heading"
        aria-level={1}
      >
        {article.headline}
      </div>
      <div className={styles.summary}>{article.summary}</div>
      <div className={styles.readMore}>
        <Button>read more</Button>
      </div>
    </div>
  )
}
