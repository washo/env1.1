import Link from 'next/link'
import Image from 'next/image'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>
          Notionブログシステム<p></p> Next.jsを使った超高速静的ブログ
        </h2>
        <p>
          このサイトは、Notionで書いた記事が、VercelのNext.jsによる自動デプロイで構築されています
        </p>
        <Image
          src="https://images.unsplash.com/photo-1623321582832-60af95a6663e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2371&q=80"
          alt="Xmas"
          width={600}
          height={300}
          sizes="100vw"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
        <p>
          Notionで公開している記事は、別ブログの下書きであったり、ちょっとしたメモを残したりする利用なので、恒常的なものではありません
        </p>
        <p>独自ドメインではCloudFlareと連携させてます</p>
      </div>

    </div>
  </>
)

export default RootPage
