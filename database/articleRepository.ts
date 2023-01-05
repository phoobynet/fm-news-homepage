import web3Desktop from '@/assets/images/image-web-3-desktop.jpg'
import web3Mobile from '@/assets/images/image-web-3-mobile.jpg'
import { Article } from '@/types/Article'
import { NewArticle } from '@/types/NewArticle'

/**
 * Fake repository
 */
export const articleRepository = {
  async getLeadingArticle(): Promise<Article> {
    return {
      headline: 'The Bright Future of Web 3.0?',
      summary:
        'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
      url: '#',
      desktopImageUrl: web3Desktop,
      mobileImageUrl: web3Mobile,
    }
  },
  async getNewArticles(): Promise<NewArticle[]> {
    return [
      {
        headline: 'Hydrogen VS Electric Cars',
        summary: 'Will hydrogen-fueled cars ever catch up to EVs?',
        url: '#',
      },
      {
        headline: 'The Downsides of AI Artistry',
        summary:
          'What are the possible adverse effects of on-demand AI image generation?',
        url: '#',
      },
      {
        headline: 'Is VC Funding Drying Up?',
        summary:
          'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
        url: '#',
      },
    ]
  },
}
