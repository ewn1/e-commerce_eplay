import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetComingSoonQuery, useGetOnSaleQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: ComingSoonGames } = useGetComingSoonQuery()

  if (onSaleGames && ComingSoonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <ProductsList
          games={ComingSoonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
        />
      </>
    )
  }

  return <h4 className="container">Loading...</h4>
}

export default Home
