import { Game } from '../Home'
import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import RE4 from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import metroid4 from '../../assets/images/metroid4.png'
import gta6 from '../../assets/images/gta6.png'
import first_light_007 from '../../assets/images/first_light_007.png'
import gears_of_war_eday from '../../assets/images/gears_of_war_eday.png'
import zelda from '../../assets/images/zelda.png'
import star_wars from '../../assets/images/star_wars.png'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((data) => setGamesAcao(data))

    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((data) => setGamesEsportes(data))

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((response) => response.json())
      .then((data) => setGamesSimulacao(data))

    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((data) => setGamesLuta(data))

    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((data) => setGamesRPG(data))
  }, [])

  return (
    <>
      <ProductsList games={gamesAcao} title="Ação" background="black" />
      <ProductsList games={gamesEsportes} title="Esportes" background="gray" />
      <ProductsList games={gamesLuta} title="Luta" background="black" />
      <ProductsList games={gamesRPG} title="RPG" background="gray" />
      <ProductsList
        games={gamesSimulacao}
        title="Simulação"
        background="black"
      />
    </>
  )
}

export default Categories
