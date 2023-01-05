import { BaseArticle } from '@/types/BaseArticle'
import { StaticImageData } from 'next/image'

export interface Article extends BaseArticle {
  desktopImageUrl: StaticImageData
  mobileImageUrl: StaticImageData
}
