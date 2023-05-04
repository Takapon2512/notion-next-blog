import { GetStaticProps, NextPage } from 'next'
import { Layout } from '@/components/Layout'
import { siteConfig } from '../../Site.config'
import { Card } from '@/components/Card'
import { fetchPages } from '../../utils/notion'
import { IndexProps } from '@/types/GlobalTypes'

export const getStaticProps: GetStaticProps = async () => {
  //ビルド時にHTMLを生成する（レンダリングごとでないので読み込みスピードが上がる）
  const { results } = await fetchPages({})
  return {
    props: {
      pages: results ? results : []
    },
    revalidate: 10
  }
}

const Home: NextPage<IndexProps> = ({ pages }) => {
  return (
    <>
    <Layout>
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">
          {/* Card */}
          {pages.map((page, index) => (
            <Card key={index} page={page} />
          ))}
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Home
