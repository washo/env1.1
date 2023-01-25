/* eslint @typescript-eslint/no-var-requires: 0 */
// use commonjs so it can be required without transpiling

const NOTION_API_SECRET = process.env.NOTION_API_SECRET
const DATABASE_ID = process.env.DATABASE_ID
const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL || `https://notion.washo3.com`
const NEXT_PUBLIC_GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || `G-FL8SGFLWFB`
const NEXT_PUBLIC_SITE_TITLE = 'Notionメモ'
const NEXT_PUBLIC_SITE_DESCRIPTION = 'Notionで公開している記事'
const NUMBER_OF_POSTS_PER_PAGE = 10

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID,
  NEXT_PUBLIC_URL,
  NEXT_PUBLIC_GA_TRACKING_ID,
  NEXT_PUBLIC_SITE_TITLE,
  NEXT_PUBLIC_SITE_DESCRIPTION,
  NUMBER_OF_POSTS_PER_PAGE,
}
