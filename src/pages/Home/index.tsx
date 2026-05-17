import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import RE4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import metroid4 from '../../assets/images/metroid4.png'
import gta6 from '../../assets/images/gta6.png'
import first_light_007 from '../../assets/images/first_light_007.png'
import gears_of_war_eday from '../../assets/images/gears_of_war_eday.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

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
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/promocoes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))

    fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
      .then((res) => res.json())
      .then((res) => setEmBreve(res))
  }, [])

  return (
    <>
      <Banner />
      <ProductsList games={promocoes} title="Promoções" background="gray" />
      <ProductsList games={emBreve} title="Em breve" background="black" />
    </>
  )
}

export default Home
